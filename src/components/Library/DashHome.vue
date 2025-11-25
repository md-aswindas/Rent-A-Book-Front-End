<template>
  <div class="body">
        <div class="body-left">
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
                  <h5>01-02-2025</h5>
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
                  <h5>01-02-2025</h5>
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
                  <h5 style="font-weight: 400; color: #575656; font-size: 12px">
                    George RR Martin
                  </h5>
                </div>
                <div class="card-txt-dates">
                  <h5>Due : &nbsp;</h5>
                  <h5>01-02-2025</h5>
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
                  <h5>01-02-2025</h5>
                </div>
              </div>
            </div>
          </div>
          <h2>Categories</h2>
          <div class="horizontal-cards">
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
            <div class="h-card"></div>
          </div>
        </div>

        <div class="body-right">
          <h2>Completed Rentals</h2>
          <div class="static-cards body-right-cards">
            <div class="card-s"></div>
            <div class="card-s"></div>
            <div class="card-s"></div>
            <div class="card-s"></div>
            <div class="card-s"></div>
            <div class="card-s"></div>
          </div>
        </div>
      </div>
</template>
<style scoped>
.body {
  display: flex;
  height: 90%;
  width: 100%;
}
.body-left {
  /* background-color: rgb(220, 220, 220); */
  height: 90%;
  min-height: calc(100vh - 80px);
  width: 60%;
  padding-left: 35px;
  padding-top: 10px;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
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
  width: 100%;
  height: 26px;
  justify-content: center;
  align-items: center;
  color: rgb(255, 255, 255);
  /* border: #000000 1px solid; */
  border-radius: 7px;
  background-color: #000000;
}

.card:hover .card-txt {
  opacity: 100%;
}

.horizontal-cards {
  /* background-color: rgb(200, 200, 200); */
  height: 220px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  flex-wrap: wrap;
  overflow-y: hidden;
  margin-top: 20px;
  margin-bottom: 20px;
}
.h-card {
  background-color: rgb(253, 250, 244);
  height: 100px;
  width: 215px;
  border-radius: 10px;
  box-shadow: #0d0c2233 1px 4px 5px;
  flex: 0 0 auto;
}
.body-right {
  /* background-color: rgb(201, 112, 112); */
  /* min-height: calc(100vh - px); */
  width: 40%;
  padding-top: 10px;
  padding-left: 20px;
  padding-right: 35px;
}
.card-s {
  background-color: rgb(253, 250, 244);
  height: 150px;
  width: 135px;
  border-radius: 10px;
  box-shadow: #0d0c2233 1px 4px 5px;
  margin-bottom: 20px;
}
.body-right-cards {
  display: flex;
  flex-wrap: wrap;
}

</style>