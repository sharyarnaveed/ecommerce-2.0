<script setup></script>

<template>
  <div class="categorycon">
    <form action="" class="addcategory">
      <input type="text" name="" id="" />
      <button type="submit">Add Category</button>
    </form>

    <div class="alreadycategory">
      <table>
        <tr>
          <th>Category Id</th>
          <th>Category Name</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<style scoped>
.categorycon {
  /* border: 2px solid yellow; */
  height: 90%;
}
.addcategory {
  /* border: 2px solid brown; */
  height: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.addcategory input {
  width: 30%;
  height: 30%;
  font-size: 1rem;
  padding: 1px 10px;
  outline: none;
}

.addcategory button {
  width: 12%;
  font-size: 1rem;
  height: 30%;
}

.alreadycategory {
  /* border: 2px solid purple; */
  height: 70%;
}

table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>
