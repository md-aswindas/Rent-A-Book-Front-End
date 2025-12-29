<template>
  <div class="body">
    <div class="body-left">
      <div class="heading">
        <h2>Active Rentals</h2>
        <p>See All ></p>
      </div>
      <div class="static-cards">
        <div class="card" @click="toggleBookDetails">
          <div class="img">
            <img :src="require('../../assets/witcher.webp')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>The Witcher</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                #uuid123456
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5 class="count">12-12-25</h5>
              <h5 class="delt">30-12-25</h5>
            </div>
          </div>
        </div>
      </div>
      <div class="heading">
        <h2>Completed Rentals</h2>
        <p>See All ></p>
      </div>
      <div class="static-cards">
        <div class="card" @click="toggleBookDetails">
          <div class="img">
            <img :src="require('../../assets/witcher.webp')" alt="Book" />
          </div>
          <div class="card-txt cmpltd">
            <div class="card-txt-name">
              <h4>The Witcher</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                #uuid123456
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5 class="count cmpltd">30-12-25</h5>
              <!-- <h5 class="delt">30-12-25</h5> -->
            </div>
          </div>
        </div>
      </div>

      <div class="heading">
        <h2>Fined Rentals</h2>
        <p>See All ></p>
      </div>
      <div class="static-cards">
        <div class="card" @click="toggleBookDetails">
          <div class="img">
            <img :src="require('../../assets/witcher.webp')" alt="Book" />
          </div>
          <div class="card-txt cmpltd">
            <div class="card-txt-name">
              <h4>The Witcher</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                #uuid123456
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5 class="count cmpltd">30-12-25</h5>
              <!-- <h5 class="delt">30-12-25</h5> -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->

    <!-- ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      imagePreview: null,
      bookData: {
        title: "",
        author: "",
        language: "",
        year: "",
        isbn_no: "",
        description: "",
        book_copies: "",
        rack: "",
        row: "",
        pages: "",
        image: null,
      },
      viewAddBook: true,
      viewBook: false,
    };
  },
  methods: {
    handleImageUpload(event) {
      const file = event.target.files[0];
      if (file) {
        this.bookData.image = file;
        const reader = new FileReader();
        reader.onload = (e) => {
          this.imagePreview = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    handleAdd() {
      // Add your logic to submit the form
      console.log("Book data:", this.bookData);
    },
    handleCancel() {
      // Reset form
      this.bookData = {
        title: "",
        author: "",
        language: "",
        year: "",
        isbn_no: "",
        description: "",
        book_copies: "",
        rack: "",
        row: "",
        pages: "",
        image: null,
      };
      this.imagePreview = null;
    },
    toggleBookView() {
      this.viewBook = !this.viewBook;
      this.viewAddBook = !this.viewAddBook;
    },
    toggleBookDetails() {
      this.viewBook = true;
      this.viewAddBook = false;
    },
  },
};
</script>
<style scoped>
/* General Layout */
.body {
  display: flex;
  height: 691px;
  width: 100%;
}

.body-left {
  height: 691px;
  width: 100%;
  padding-left: 35px;
  padding-top: 10px;
  padding-right: 35px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}

.body-right {
  position: relative;
  height: 691px;
  width: 35%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 35px;
}

/* Headings */
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

/* Categories */
.categories {
  height: 35px;
  width: 100%;
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 12px;
}

.categories h5 {
  line-height: 30px;
  font-weight: 600;
  background-color: rgb(3, 104, 255);
  color: #ffffff;
  border: 1px solid rgb(3, 104, 255);
  padding: 0px 15px;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}

/* Cards */
.static-cards {
  height: 260px;
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
  justify-content: space-between;
}

.static-cards .card {
  padding: 5px;
  width: 180px;
  height: 260px;
  border-radius: 18px;
  overflow: hidden;
  background: #ffffff;
  border: none;
  position: relative;
  cursor: pointer;
}

.card {
  transform-style: preserve-3d;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.card:hover {
  transform: scale(1.08);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
}

.img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
}

.img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-txt {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background: rgb(248, 248, 248);
  color: #000000;
  opacity: 0;
  transition: opacity 0.4s ease;
  height: 95px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}


.card-txt-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.card-txt-dates {
  display: flex;
  height: 26px;
  justify-content: space-between;
  align-items: center;
  color: rgb(57, 57, 57);
  margin-top: 10px;
}

.card-txt-dates .count {
  font-weight: 600;
  font-size: 14px;
  width: fit-content;
  height: fit-content;
  align-self: center;
  padding: 1.5px 8px;
  background-color: #d1ffd0;
  color: #026c02;
  border: 1px solid #a3dca3;
  border-radius: 7px;
}
.count.cmpltd {
  width: 100%;
  text-align: center;
}

.card-txt-dates .delt {
  font-weight: 600;
  font-size: 14px;
  width: fit-content;
  height: fit-content;
  align-self: center;
  padding: 1.5px 8px;
  background-color: #ffd1d1;
  color: #c00202;
  border: 1px solid #dca3a3;
  border-radius: 7px;
  cursor: pointer;
}

.card:hover .card-txt {
  opacity: 100%;
}

/* Scrollbar */
::-webkit-scrollbar {
  display: none;
}

/* Form Styles */
.body-right-cards {
  max-height: 600px;
  overflow-y: auto;
  margin-top: 20px;
  position: relative;
  display: flex;
  width: 100%;
  flex-direction: column;
}

.body-right-cards::-webkit-scrollbar {
  width: 8px;
}

.body-right-cards::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 4px;
}

.body-right-cards::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 4px;
}

.body-right-cards::-webkit-scrollbar-thumb:hover {
  background: #555;
}

.image-preview {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 160px;
  height: 240px;
  overflow: hidden;
  border-radius: 8px;
  background-color: #f5f5f5;
}

.image-preview img {
  width: 100%;
  height: 100%;
  object-fit: fill;
}

.form-row {
  display: flex;
  gap: 12px;
}

.form-row > * {
  flex: 1;
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  pointer-events: none;
  z-index: 10;
}

.scroll-indicator::before {
  content: "";
  position: absolute;
  bottom: -20px;
  left: 50%;
  transform: translateX(-50%);
  width: 660%;
  height: 120px;
  background: linear-gradient(
    to top,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
  pointer-events: none;
}

.swipe-text {
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1px;
  color: #666;
  position: relative;
  z-index: 11;
}

.swipe-arrow {
  color: #666;
  animation: bounce 2s infinite;
  position: relative;
  z-index: 11;
}

@keyframes bounce {
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
}

.d-flex {
  display: flex;
  flex-direction: column;
}

.gap-3 {
  gap: 12px;
}

.mb-3 {
  margin-bottom: 12px;
}

.mb-4 {
  margin-bottom: 16px;
}

/* Book Details */
.book {
  height: 100%;
  width: 100%;
}

.close-icon {
  cursor: pointer;
}

.bookImg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
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