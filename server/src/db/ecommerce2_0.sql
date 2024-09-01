-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 02, 2024 at 01:19 AM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecommerce2.0`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_id` int(11) NOT NULL,
  `adminname` varchar(20) NOT NULL,
  `adminpass` varchar(255) NOT NULL,
  `refresh_token` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_id`, `adminname`, `adminpass`, `refresh_token`) VALUES
(4, 'sharyar', '$2a$10$5gnnr7eWD4bXAcH6bmZL1uOdabGetxKIhWHwCL9Yi6kqgvDcZNkMm', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNzI1MDQ2MTg5LCJleHAiOjE3MjU2NTA5ODl9.KIYfnj9dRLdwEqx3LKdCjAiQCS6fpRCY7eFIOavyXsw'),
(6, 'check', '$2a$10$2kb6WKddZI0faBSemHTRsOjqqb56vMkyB3dpZ4PoSE6E0LIXUiIA6', '');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `category_name` varchar(255) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `category_name`, `time`) VALUES
(1, 'bags', '2024-08-24 19:30:54'),
(2, 'shoes', '2024-08-24 19:31:23'),
(3, 'belt', '2024-08-28 23:12:57');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `order_id` int(11) NOT NULL,
  `firstname` varchar(25) NOT NULL,
  `lastname` varchar(25) NOT NULL,
  `email` varchar(125) NOT NULL,
  `address` text NOT NULL,
  `mobilenum` varchar(20) NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_products`
--

CREATE TABLE `order_products` (
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `product_name` varchar(255) NOT NULL,
  `product_price` float NOT NULL,
  `product_size` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`product_size`)),
  `product_description` text NOT NULL,
  `pimg1` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `products`
--

INSERT INTO `products` (`product_id`, `category_id`, `product_name`, `product_price`, `product_size`, `product_description`, `pimg1`, `time`) VALUES
(7, 2, 'NIke Shoes', 650, '[{\"id\":2,\"name\":\"S\"},{\"id\":3,\"name\":\"M\"},{\"id\":5,\"name\":\"XL\"}]', 'Nike shoes are designed to enhance your athletic performance and everyday comfort with cutting-edge technology and stylish aesthetics. Whether you\'re a seasoned athlete or simply seeking a comfortable, fashionable shoe for everyday wear, Nike has various options to meet your needs. Experience the perfect blend of performance, comfort, and style with Nike shoes and take your athletic endeavors and daily activities to the next level.', '[{\"id\":0,\"path\":\"public\\\\images\\\\image-1725043933730.jpg\"},{\"id\":1,\"path\":\"public\\\\images\\\\image-1725043933746.jpg\"}]', '2024-08-30 18:52:13'),
(8, 2, 'Casual Shoes', 300, '[{\"id\":1,\"name\":\"XS\"},{\"id\":3,\"name\":\"M\"},{\"id\":5,\"name\":\"XL\"}]', 'Casual shoes are designed to balance comfort and style perfectly, making them ideal for daily wear. Whether you\'re running errands, meeting friends, or just enjoying a day out, casual shoes offer the versatility and ease you need to step out in confidence.', '[{\"id\":0,\"path\":\"public\\\\images\\\\image-1725044192189.jpg\"},{\"id\":1,\"path\":\"public\\\\images\\\\image-1725044192294.jpg\"}]', '2024-08-30 18:56:32'),
(9, 2, 'Adidas Shoes', 230, '[{\"id\":1,\"name\":\"XS\"},{\"id\":2,\"name\":\"S\"},{\"id\":3,\"name\":\"M\"}]', 'Adidas shoes combine cutting-edge innovation with timeless design to deliver footwear that elevates your performance and complements your style. Whether you\'re hitting the gym, running a marathon, or just stepping out in style, Adidas offers the perfect blend of comfort, durability, and fashion.', '[{\"id\":0,\"path\":\"public\\\\images\\\\image-1725044331468.jpg\"}]', '2024-08-30 18:58:51'),
(10, 2, 'Female Sandles', 130, '[{\"id\":3,\"name\":\"M\"},{\"id\":4,\"name\":\"L\"}]', 'Women\'s sandals are the perfect blend of style and comfort, designed to keep your feet cool and supported while adding a touch of elegance to any outfit. From casual outings to special occasions, sandals offer a versatile option that suits a variety of settings and personal styles.', '[{\"id\":0,\"path\":\"public\\\\images\\\\image-1725044381825.jpg\"}]', '2024-08-30 18:59:41'),
(11, 3, 'Leather Belts', 100, '[{\"id\":3,\"name\":\"M\"},{\"id\":4,\"name\":\"L\"}]', 'these are leather belts', '[{\"id\":0,\"path\":\"public\\\\images\\\\image-1725044973509.jpg\"},{\"id\":1,\"path\":\"public\\\\images\\\\image-1725044973667.jpg\"}]', '2024-08-30 19:09:33'),
(12, 1, 'School Bag', 50, '[{\"id\":3,\"name\":\"M\"},{\"id\":4,\"name\":\"L\"}]', 'THe School bag', '[{\"id\":0,\"path\":\"public\\\\images\\\\image-1725045017244.jpg\"},{\"id\":1,\"path\":\"public\\\\images\\\\image-1725045017266.jpg\"},{\"id\":2,\"path\":\"public\\\\images\\\\image-1725045017396.jpg\"}]', '2024-08-30 19:10:17');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`admin_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`product_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `admin_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
