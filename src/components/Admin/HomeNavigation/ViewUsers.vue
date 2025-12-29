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
          <tr v-for="(user, index) in paginatedUsers" :key="user.userId">
            <td>{{ startIndex + index }}</td>
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

      <!-- Pagination -->
      <div class="pagination" v-if="filteredUsers.length > 0">
        <div class="pagination-info">
          Showing {{ startIndex }} - {{ endIndex }} of {{ filteredUsers.length }} users
        </div>

        <div class="pagination-controls">
          <button class="page-btn" :disabled="currentPage === 1" @click="prevPage">Prev</button>

          <button
            v-for="p in pages"
            :key="p"
            class="page-number"
            :class="{ active: p === currentPage }"
            @click="goToPage(p)"
          >
            {{ p }}
          </button>

          <button class="page-btn" :disabled="currentPage === totalPages" @click="nextPage">Next</button>

          <select v-model.number="pageSize" class="page-size" aria-label="Rows per page">
            <option v-for="opt in [5,10,20]" :key="opt" :value="opt">{{ opt }} / page</option>
          </select>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      search: "",
      currentPage: 1,
      pageSize: 5,
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
        // more demo users for pagination clarity
        { userId: 'u3', name: 'Sandeep Kumar', email: 'sandeep@gmail.com', mobile: '9000000001', active: true },
        { userId: 'u4', name: 'Priya Singh', email: 'priya@gmail.com', mobile: '9000000002', active: true },
        { userId: 'u5', name: 'Vikram Joshi', email: 'vikram@gmail.com', mobile: '9000000003', active: false },
        { userId: 'u6', name: 'Maya Rao', email: 'maya@gmail.com', mobile: '9000000004', active: true },
      ],
    };
  },
  computed: {
    filteredUsers() {
      const q = this.search.trim().toLowerCase();
      if (!q) return this.users;
      return this.users.filter(
        (u) => u.name.toLowerCase().includes(q) || u.email.toLowerCase().includes(q)
      );
    },

    totalPages() {
      return Math.ceil(this.filteredUsers.length / this.pageSize) || 1;
    },

    pages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },

    paginatedUsers() {
      const start = (this.currentPage - 1) * this.pageSize;
      return this.filteredUsers.slice(start, start + this.pageSize);
    },

    startIndex() {
      if (this.filteredUsers.length === 0) return 0;
      return (this.currentPage - 1) * this.pageSize + 1;
    },

    endIndex() {
      return Math.min(this.currentPage * this.pageSize, this.filteredUsers.length);
    },
  },
  watch: {
    search() {
      this.currentPage = 1;
    },
    pageSize() {
      // reset to first page on page size change
      this.currentPage = 1;
    },
    filteredUsers() {
      if (this.currentPage > this.totalPages) this.currentPage = this.totalPages || 1;
    }
  },
  methods: {
    goToPage(p) {
      this.currentPage = p;
    },
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
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
  padding: 12px;
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

/* Pagination */
.pagination {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 12px;
}

.pagination-info {
  color: #bdbdbd;
}

.pagination-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.page-btn {
  background: transparent;
  border: 1px solid #3b3b3b;
  color: #fff;
  padding: 6px 10px;
  border-radius: 6px;
  cursor: pointer;
}

.page-number {
  background: transparent;
  border: none;
  color: #bdbdbd;
  padding: 6px 8px;
  cursor: pointer;
}

.page-number.active {
  background: #3b82f6;
  color: #fff;
  border-radius: 6px;
}

.page-size {
  background: #3a3a3a;
  color: #fff;
  border-radius: 6px;
  padding: 6px;
  border: none;
}
</style>