<template>
  <div class="body">
    <div class="body-left">
      <div class="summary-cards">
        <div class="summary-card users-card">
          <h3>Total Users</h3>
          <div class="card-content">
            <v-icon size="40" color="#007bff">mdi-account-group</v-icon>
            <p>{{ totalUsers }}</p>
          </div>
        </div>
        <div class="summary-card books-card">
          <h3>Total Books</h3>
          <div class="card-content">
            <v-icon size="40" color="#007bff">mdi-book-open-page-variant</v-icon>
            <p>{{ totalBooks }}</p>
          </div>
        </div>
        <div class="summary-card rentals-card">
          <h3>Active Rentals</h3>
          <div class="card-content">
            <v-icon size="40" color="#007bff">mdi-book-clock</v-icon>
            <p>{{ activeRentals }}</p>
          </div>
        </div>
      </div>
      <h2>Active Rentals</h2>
      <div class="static-cards">
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/got.jpg')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                George RR Martin
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/got1.jpg')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                George RR Martin
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/witcher.webp')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>The Witcher</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                Lauren Schmidt Hissrich
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/got.jpg')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <p style="font-weight: 400; color: #575656; font-size: 12px">
                George RR Martin
              </p>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
      </div>
      <h2>Genre</h2>
      <div class="categories">
        <h5>All</h5>
        <h5>Horror</h5>
        <h5>Fantacy</h5>
        <h5>Sci-Fi</h5>
        <h5>Romance</h5>
        <h5>History</h5>
        <h5>Mystery</h5>
      </div>

      <div class="static-cards">
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/got.jpg')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                George RR Martin
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/got1.jpg')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                George RR Martin
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/witcher.webp')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>The Witcher</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                Lauren Schmidt Hissrich
              </h5>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
        <div class="card">
          <div class="img">
            <img :src="require('../../assets/got.jpg')" alt="Book" />
          </div>
          <div class="card-txt">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <p style="font-weight: 400; color: #575656; font-size: 12px">
                George RR Martin
              </p>
            </div>
            <div class="card-txt-dates">
              <h5>Due : &nbsp;</h5>
              <h5>01/02/2025</h5>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="body-right">
      <h2>Completed Rentals</h2>
      <div class="body-right-cards">
        <div class="card-s">
          <div class="img-s">
            <img :src="require('../../assets/got1.jpg')" alt="Book" />
          </div>
          <div class="card-txt1">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                #uuid
              </h5>
            </div>

            <div class="card-date-fine">
              <div class="card-txt-dates returned-on">
                <h5>Returned On : &nbsp;</h5>
                <h5>01/02/2025</h5>
              </div>
              <h5
                style="
                  font-weight: 600;
                  color: green;
                  font-size: 12px;
                  background-color: #bbfcc8;
                  width: fit-content;
                  padding: 4px 10px;
                  border-radius: 7px;
                "
              >
                No Fine
              </h5>
            </div>
          </div>
        </div>
        <div class="card-s">
          <div class="img-s">
            <img :src="require('../../assets/witcher.webp')" alt="Book" />
          </div>
          <div class="card-txt1">
            <div class="card-txt-name">
              <h4>The Witcher</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                #uuid
              </h5>
            </div>

            <div class="card-date-fine">
              <div class="card-txt-dates returned-on">
                <h5>Returned On : &nbsp;</h5>
                <h5>01/02/2025</h5>
              </div>
              <h5
                style="
                  font-weight: 600;
                  color: green;
                  font-size: 12px;
                  background-color: #bbfcc8;
                  width: fit-content;
                  padding: 4px 10px;
                  border-radius: 7px;
                "
              >
                No Fine
              </h5>
            </div>
          </div>
        </div>
        <div class="card-s">
          <div class="img-s">
            <img :src="require('../../assets/got1.jpg')" alt="Book" />
          </div>
          <div class="card-txt1">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                #uuid
              </h5>
            </div>

            <div class="card-date-fine">
              <div class="card-txt-dates returned-on">
                <h5>Returned On : &nbsp;</h5>
                <h5>01/02/2025</h5>
              </div>
              <h5
                style="
                  font-weight: 600;
                  color: #690202;
                  font-size: 12px;
                  background-color: #fcbbbb;
                  width: fit-content;
                  padding: 4px 10px;
                  border-radius: 7px;
                "
              >
                ₹100 fine
              </h5>
            </div>
          </div>
        </div>
        <div class="card-s">
          <div class="img-s">
            <img :src="require('../../assets/got1.jpg')" alt="Book" />
          </div>
          <div class="card-txt1">
            <div class="card-txt-name">
              <h4>Game of Thrones</h4>
              <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                #uuid
              </h5>
            </div>

            <div class="card-date-fine">
              <div class="card-txt-dates returned-on">
                <h5>Returned On : &nbsp;</h5>
                <h5>01/02/2025</h5>
              </div>
              <h5
                style="
                  font-weight: 600;
                  color: green;
                  font-size: 12px;
                  background-color: #bbfcc8;
                  width: fit-content;
                  padding: 4px 10px;
                  border-radius: 7px;
                "
              >
                No Fine
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.body {
  display: flex;
  height: 691px;
  width: 100%;
}
.body-left {
  /* background-color: rgb(206, 34, 34); */
  height: 691px;
  /* min-height: calc(100vh - 80px); */
  width: 65%;
  padding-left: 35px;
  padding-top: 10px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.static-cards {
  /* background-color: rgb(200, 200, 200); */
  height: 260px;
  width: 100%;
  display: flex;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
  justify-content: space-between;
}
.static-cards .card {
  padding: 5px;
  width: 180px;
  height: 260px;
  border-radius: 18px;
  overflow: hidden; /* REQUIRED */
  background: #ffffff;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.25);
  border: none;
  position: relative;
  /* display: flex;
  align-items: center;
  justify-content: center; */
}
.img {
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 16px;
}
.img-s {
  height: 110px;
  width: 90px;
  border-radius: 10px;
  display: flex;
  margin-left: 5px;
}
.img-s img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 10px;
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
.card-txt1 {
  margin-left: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90px;
  flex: 1;
}
.card-txt-name {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card-txt-dates {
  display: flex;
  /* width: 100%; */
  padding: 10px 10px;
  height: 26px;
  justify-content: center;
  align-items: center;
  background-color: #ffd1d1;
  color: #c00202;
  border: 1px solid #dca3a3;
  border-radius: 7px;
  
}
.returned-on {
  background-color: #fce4bb;
  color: rgb(128, 64, 0);
  border: 1px solid #e6d0a3;
}
.card-date-fine {
  display: flex;
  gap: 20px;
}

.card:hover .card-txt {
  opacity: 100%;
}

.card {
  transform-style: preserve-3d;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}

.card:hover {
  transform: scale(1.08);
  box-shadow: 0 18px 40px rgba(0, 0, 0, 0.3);
}

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
  background-color: rgb(132, 180, 253);
  color: #1b0179;
  /* border: 1px solid rgb(3, 104, 255); */
  padding: 0px 15px;
  border-radius: 10px;
  cursor: pointer;
  width: fit-content;
  height: fit-content;
}


.horizontal-cards {
  height: 220px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  overflow-y: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
}/* 
.h-card {
  background-color: rgb(255, 255, 255);
  height: 215px;
  width: 109px;
  border-radius: 12px 12px 12px 0px;
  box-shadow: #31303633 1px 4px 5px;
  flex: 0 0 auto;
  display: flex;
  align-items: center;
  justify-content: flex-end;
} 
::-webkit-scrollbar {
  display: none;
} */


.h-card {
  background-color: rgb(255, 255, 255);
  height: 215px;
  width: 109px;
  border-radius: 12px 12px 12px 0px;
  box-shadow: #31303633 1px 4px 5px;
  flex: 0 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  position: relative;
}

.h-card:hover {
  width: 240px;
  box-shadow: #31303633 2px 6px 10px;
  z-index: 10;
}
.h-card:hover .genre-content {
  flex-direction: row-reverse;
  justify-content: space-around;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  height: fit-content;
   /* transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); */
}
.h-card:hover .genre-img{
  height: 80%;
  opacity: 1;
  /* margin-right: 10px; */
   transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

::-webkit-scrollbar {
  display: none;
}
.genre-img {
  height: 0px;
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #a1ee9d;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  position: absolute;
  z-index: 1;
}
.genre-content {
  height: 100%;
  width: 100%;
  border-top-left-radius:12px ;
  border-top-right-radius:12px ;
  border-bottom-right-radius:12px ;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #fcf9f2;
  position: absolute;
  z-index: 2;
}
.genre-txt {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-size: 18px;
  /* background-color: #312626; */
}
.genre-txt h2 {
  color: #0f0e0e; 
  transform: rotate(450deg);
}
.genre-count {
  height: fit-content;
  width: fit-content;
  padding: 10px;
  background-color: rgb(56, 56, 56);
  color: #ffffff;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 22px;
}
.h-card:hover .genre-count {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-left-radius: 0;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.h-card:hover .genre-txt h2 {
  transform: rotate(0deg);
   /* transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); */
}

/* 
.h-card {
  height: 100px;
  width: 215px;
  flex: 0 0 auto;
  background: #383838; 
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.15) 1px 4px 6px;
  display: flex;
  align-items: center;
  padding-left: 20px;
  position: relative;
  overflow: hidden;
  font-weight: 700;
  font-size: 20px;
 
}


.h-card::after {
  content: "";
  position: absolute;
  right: 15px;
  bottom: 25px;
  width: 50px;
  height: 50px;
  
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3Cpath fill='%23eca72c' d='M256 141.3l0 309.3 .5-.2C311.1 427.7 369.7 416 428.8 416l19.2 0 0-320-19.2 0c-42.2 0-84.1 8.4-123.1 24.6-16.8 7-33.4 13.9-49.7 20.7zM230.9 61.5L256 72 281.1 61.5C327.9 42 378.1 32 428.8 32L464 32c26.5 0 48 21.5 48 48l0 352c0 26.5-21.5 48-48 48l-35.2 0c-50.7 0-100.9 10-147.7 29.5l-12.8 5.3c-7.9 3.3-16.7 3.3-24.6 0l-12.8-5.3C184.1 490 133.9 480 83.2 480L48 480c-26.5 0-48-21.5-48-48L0 80C0 53.5 21.5 32 48 32l35.2 0c50.7 0 100.9 10 147.7 29.5z'/%3E%3C/svg%3E");
  background-size: cover;
  background-repeat: repeat;
} */

.body-right {
  /* background-color: rgb(201, 112, 112); */
  /* min-height: calc(100vh - px); */
  height: 691px;
  width: 35%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 35px;
}
.card-s {
  background-color: rgb(253, 250, 244);
  height: 120px;
  width: 100%;
  border-radius: 10px;
  box-shadow: #0d0c2233 1px 4px 5px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
}
.body-right-cards {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 20px;
  margin-bottom: 40px;
}

.summary-cards {
  display: flex;
  gap: 20px;
  margin-bottom: 30px;
}

.summary-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.summary-card h3 {
  margin: 0 0 10px 0;
  font-size: 16px;
  color: #333;
}

.card-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.summary-card p {
  font-size: 40px;
  font-weight: bold;
  margin: 0;
}

.users-card .summary-card p {
  color: #007bff;
}

.books-card .summary-card p {
  color: #28a745;
}

.rentals-card .summary-card p {
  color: #ffc107;
}
</style>

<script>
export default {
  data() {
    return {
      totalUsers: 150,
      totalBooks: 500,
      activeRentals: 25
    };
  }
};
</script>