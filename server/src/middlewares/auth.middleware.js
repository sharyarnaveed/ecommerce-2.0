import jwt from "jsonwebtoken";

export const verifyjwt = async (req, res, next) => {
    try {
        const atoken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");
        const retoken = req.cookies.refreshtoken;

        if (!atoken) {
            // No access token provided
            if (!retoken) {
                return res.status(401).json({
                    message: "Unauthorized",
                    success: false
                });
            } else {
                // Refresh the access token using the refresh token
                jwt.verify(retoken, process.env.REFRESH_TOKEN_KEY, (err, result) => {
                    if (err) return res.status(401).json({
                        message: 'INVALID REFRESH TOKEN',
                        success: false
                    });

                    // Generate a new access token
                    const newacctoken = jwt.sign({ id: result.user_id }, process.env.ACCESS_TOKEN_KEY, { expiresIn: process.env.ACCESS_TOKEN_TIME });
                    const theop = {
                        httpOnly: true,
                        secure: process.env.NODE_ENV === 'production', // Use secure cookies in production
                    };

                    res.status(200)
                        .cookie("accessToken", newacctoken, theop);

                    req.user = result;
                    next();
                });
            }
        } else {
            // Verify the access token
            jwt.verify(atoken, process.env.ACCESS_TOKEN_KEY, (err, decode) => {
                if (err) {
                    // Handle token expired or other errors
                    if (err.name === 'TokenExpiredError' && retoken) {
                        // Handle token expiration scenario
                        jwt.verify(retoken, process.env.REFRESH_TOKEN_KEY, (err, result) => {
                            if (err) return res.status(401).json({
                                message: 'INVALID REFRESH TOKEN',
                                success: false
                            });

                            // Generate a new access token
                            const newacctoken = jwt.sign({ id: result.user_id }, process.env.ACCESS_TOKEN_KEY, { expiresIn: process.env.ACCESS_TOKEN_TIME });
                            const theop = {
                                httpOnly: true,
                                secure: process.env.NODE_ENV === 'production',
                            };

                            res.status(200)
                                .cookie("accessToken", newacctoken, theop);

                            req.user = result;
                            next();
                        });
                    } else {
                         res.status(401).json({
                            message: 'Unauthorized',
                            success: false
                        });
                    }
                } else {
                    req.user = decode;
                    next();
                }
            });
        }
    } catch (error) {
        console.log("Error in authentication", error);
        res.status(500).json({
            message: 'Internal Server Error',
            success: false
        });
    }
};
