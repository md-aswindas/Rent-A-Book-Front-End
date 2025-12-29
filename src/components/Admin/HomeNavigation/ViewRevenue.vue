<template>
  <div class="users-page">

    <!-- Search -->
    <div class="toolbar">
      <input
        type="text"
        placeholder="Search by name or email..."
        v-model="search"
      />
    </div>

    <!-- Users Table -->
    <div class="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="(user, index) in filteredUsers" :key="user.userId">
            <td>{{ index + 1 }}</td>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.mobile }}</td>
            <td>
              <span :class="['status', user.active ? 'active' : 'inactive']">
                {{ user.active ? 'Active' : 'Inactive' }}
              </span>
            </td>
            <td>
              <button class="btn view">View</button>
              <button class="btn delete">Delete</button>
            </td>
          </tr>

          <tr v-if="filteredUsers.length === 0">
            <td colspan="6" class="empty">No users found</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      users: [
        {
          userId: "u1",
          name: "Rahul Sharma",
          email: "rahul@gmail.com",
          mobile: "9876543210",
          active: true,
        },
        {
          userId: "u2",
          name: "Anita Verma",
          email: "anita@gmail.com",
          mobile: "9123456789",
          active: false,
        },
      ],
    };
  },
  computed: {
    filteredUsers() {
      return this.users.filter(
        (u) =>
          u.name.toLowerCase().includes(this.search.toLowerCase()) ||
          u.email.toLowerCase().includes(this.search.toLowerCase())
      );
    },
  },
};
</script>

<style scoped>
.users-page {
  color: #eaeaea;
}

.title {
  font-size: 24px;
  margin-bottom: 20px;
}

/* Toolbar */
.toolbar {
  margin-bottom: 15px;
}

.toolbar input {
  width: 300px;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  outline: none;
  background: #3a3a3a;
  color: #fff;
}

/* Table */
.table-wrapper {
  background: #252628;
  border-radius: 12px;
  overflow: hidden;
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background: #1e1f22;
}

th,
td {
  padding: 14px;
  text-align: center;
}

tbody tr {
  border-bottom: 1px solid #333;
}

tbody tr:hover {
  background: #2f2f33;
}

/* Status */
.status {
  padding: 5px 12px;
  border-radius: 20px;
  font-size: 13px;
}

.status.active {
  background: #1db954;
  color: #000;
}

.status.inactive {
  background: #ff4d4d;
  color: #fff;
}

/* Buttons */
.btn {
  padding: 6px 12px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  margin-right: 6px;
}

.btn.view {
  background: #3b82f6;
  color: white;
}

.btn.delete {
  background: #ef4444;
  color: white;
}

.empty {
  text-align: center;
  padding: 20px;
  color: #aaa;
}
</style>
