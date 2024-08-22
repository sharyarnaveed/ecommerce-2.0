<script setup>

</script>
<template>
    <section class="admincontainer">
      <sidepanel />
      <section class="orderdetailcontainer">
        <div
          class="container"
        >
          
          <div class="header">
            <h2>E-comm</h2>
            <br />
            <h1>Bill Transcript</h1>
  
            <button class="no-print" onclick="window.print()">
              Print/Download
            </button>
          </div>
          <div class="content">
            <div class="info">
              <table>
                <tr>
                  <td><strong>NAME:</strong></td>
                  <td><strong>Phone NO:</strong></td>
                </tr>
                <tr>
                  <td><strong>Address:</strong></td>
                  <td>
                    <strong>Order Placed:</strong>
                  </td>
                </tr>
  
                <tr>
                  <td >
                    <strong>Order Details:</strong>
                    
                  </td>
                  <td >
                    <strong>Quantity:</strong>
                    
                  </td>
                </tr>
                <tr>
                  <td colspan="2"><strong>Price:</strong></td>
                </tr>
              </table>
            </div>
           
          </div>
         
        </div>
      </section>
    </section>
  
    <!-- {{ theorder[0].address }} -->
  </template>



<style  scoped>

.container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #000;
}
.logo_img
{
width: 14%;
}
.header {
    text-align: center;
}

.header button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
}

.content {
    margin-top: 20px;
}

.profile-picture {
    float: right;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-left: 20px;
}

.info {
    overflow: auto;
}

table {
    width: 100%;
    border-collapse: collapse;
}

table, th, td {
    border: 1px solid #000;
    padding: 10px;
}

td {
    vertical-align: top;
}

.complete_button
{
    /* border: 2px solid green; */
    width: 160px;
    height: 50px;
    margin: 20px;
    font-size: 20px;
    background-color: black;
    color: white;
}
.order_image
{
    border: 2px solid green;
    width: 100%;
}
@media print {
    .no-print {
        display: none;
    }
    .sidepanelcontainer
    {
        display: none;
    }
    .complete_button 
    {
        display: none;
    }
}
</style>