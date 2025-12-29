<template>
  <div class="dash-home">
    <div class="left-content" :style="{ width: leftWidth }">
      <div class="heading">
        <h2>All Users</h2>
      </div>

      <div class="user-details-card" v-for="(user, index) in paginatedUsers" :key="index" @click="toggleView">
        <!-- User details content here -->
        <h3>{{ user.name }}</h3>
        <p>{{ user.email }}</p>
      </div>

      <v-pagination
        v-model="currentPage"
        :length="totalPages"
        @update:model-value="updatePage"
        class="pagination"
      ></v-pagination>
    </div>
    <div class="right-content" v-if="isExpanded" :style="{ width: rightWidth }">
      <div class="heading">
        <h2>User Details</h2>
        <v-icon
          icon="mdi-close"
          @click="toggleViewClose"
          class="close-icon"
        ></v-icon>
      </div>

      <div class="bookImg">
        <img :src="require('../../assets/witcher.webp')" alt="Book" />
        <div class="bookContent">
          <h2>The Witcher</h2>
          <h4>Lauren Schmidt Hissrich</h4>
          <h4>#ISBN No : 978-3-16-148410-0</h4>
          <div class="content2">
            <h4>English</h4>
            <h4>2020</h4>
            <h4>500 pages</h4>
            <h4>RK1</h4>
            <h4>R3</h4>
            <h4>Fiction</h4>
            <h4 class="condtn">Good</h4>
          </div>
        </div>
      </div>
      <div class="heading">
        <h3>Description</h3>
      </div>
      <div class="description">
        
      </div>
      <!-- <button type="button" class="btn dlt">Delete</button> -->
    </div>
  </div>
</template>

<script>
export default {
  name: "DashUsers",
  data() {
    return {
      isExpanded: false,
      users: [
        { name: 'User 1', email: 'user1@example.com' },
        { name: 'User 2', email: 'user2@example.com' },
        { name: 'User 3', email: 'user3@example.com' },
        { name: 'User 4', email: 'user4@example.com' },
        { name: 'User 5', email: 'user5@example.com' },
        { name: 'User 6', email: 'user6@example.com' },
        { name: 'User 7', email: 'user7@example.com' },
        { name: 'User 8', email: 'user8@example.com' },
        { name: 'User 9', email: 'user9@example.com' },
        { name: 'User 10', email: 'user10@example.com' },
        { name: 'User 11', email: 'user11@example.com' },
        { name: 'User 12', email: 'user12@example.com' },
        { name: 'User 13', email: 'user13@example.com' },
        { name: 'User 14', email: 'user14@example.com' },
        { name: 'User 15', email: 'user15@example.com' },
        { name: 'User 16', email: 'user16@example.com' },
        { name: 'User 17', email: 'user17@example.com' },
        { name: 'User 18', email: 'user18@example.com' },
        { name: 'User 19', email: 'user19@example.com' },
        { name: 'User 20', email: 'user20@example.com' },
      ],
      currentPage: 1,
      itemsPerPage: 6,
    };
  },
  computed: {
    leftWidth() {
      return this.isExpanded ? "65%" : "100%";
    },
    rightWidth() {
      return this.isExpanded ? "35%" : "0%";
    },
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.users.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.users.length / this.itemsPerPage);
    },
  },
  methods: {
    toggleView() {
      this.isExpanded = true;
    },
    toggleViewClose() {
      this.isExpanded = false;
    },
    updatePage(page) {
      this.currentPage = page;
    },
  },
};
</script>

<style scoped>
.dash-home {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.left-content {
  /* background-color: rgb(112, 201, 112); */
  /* min-height: calc(100vh - px); */
  height: 691px;
  padding-left: 35px;
  padding-top: 10px;
  padding-right: 20px;
  overflow-y: auto;
  overflow-x: hidden;
  padding-bottom: 20px;
}
.left-content::-webkit-scrollbar {
  display: none;
}
.right-content {
  /* background-color: rgb(201, 112, 112); */
  /* min-height: calc(100vh - px); */
  height: 691px;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 35px;
}

.heading {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

.heading p {
  color: #026c02;
  align-self: center;
  cursor: pointer;
  background-color: rgb(194, 249, 191);
  border: 1px solid #55b655;
  padding: 5px 15px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 600;
}
.user-details-card {
  width: 99%;
  height: 120px;
  background-color: #fff4f4;
  margin-top: 20px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 50px;  padding: 10px;
  box-sizing: border-box;
}

.pagination {
  margin-top: 20px;
  display: flex;
  justify-content: center;}
.user-details-card:hover {
  transform: scale(1.02);
  box-shadow: 0 18px 60px rgba(0, 0, 0, 0.3);
}
.close-icon {
  cursor: pointer;
}

.bookImg {
  width: 100%;
  /* height: 100%; */
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  margin-top: 20px;
  margin-bottom: 15px;
}

.bookImg img {
  width: 130px;
  height: 180px;
  object-fit: cover;
  border-radius: 12px;
  border: 4px solid #ffffff;
}

.bookContent {
  height: 180px;
  width: calc(100% - 130px);
  margin-left: 10px;
  border-radius: 12px;
  padding: 10px 10px;
}

.bookContent h2 {
  font-size: 24px;
  font-weight: 700;
}

.bookContent h4 {
  font-size: 14px;
  font-weight: 400;
  color: #575656;
  margin-top: 4px;
}

.content2 {
  margin-top: 5px;
  margin-bottom: 10px;
  height: fit-content;
  overflow-y: auto;
  display: flex;
  flex-wrap: wrap;
}

.content2 h4 {
  width: fit-content;
  height: fit-content;
  padding: 5px 10px;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  color: #463622;
  line-height: 20px;
  background-color: #eee29d;
  margin-right: 5px;
  margin-top: 5px;
  border: 1px solid #c3b89a;
}

.content2 h4.condtn {
  background-color: #a1ee9d;
  color: #0f6620;
  border: 1px solid #7bc17c;
}

.description {
  margin-top: 10px;
  height: 260px;
  width: 100%;
  border-radius: 12px;
  color: #575656;
  overflow-y: auto;
}

.btn {
  width: 100%;
  height: 40px;
  border: none;
  border-radius: 12px;
  margin-top: 15px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
}

.btn.dlt {
  background-color: #ffd1d1;
  color: #c00202;
  border: 1px solid #dca3a3;
}

.btn.upd {
  background-color: #d1ffd0;
  color: #026c02;
  border: 1px solid #a3dca3;
}
</style>