<template>
  <div class="dash-home">
    <!-- <h1>Feedbacks</h1> -->
    <div class="feedbacks-container">
      <div
        v-for="feedback in feedbacks"
        :key="feedback.id"
        class="feedback-card"
      >
        <div class="card-header">
          <h3>{{ feedback.username }}</h3>
          <div class="rating">
            <v-icon
              v-for="star in getStars(feedback.rating)"
              :key="star.index"
              :icon="star.filled ? 'mdi-star' : 'mdi-star-outline'"
              size="16"
              color="yellow"
            ></v-icon>
          </div>
          <span class="id">ID: {{ feedback.id }}</span>
        </div>
        <div class="card-body">
          <p class="feedback-text">{{ feedback.feedback }}</p>
          <div v-if="feedback.response" class="response">
            <v-icon class="response-icon" icon="mdi-reply-outline"
              ></v-icon
            >
            <span class="response-text">{{ feedback.response }}</span>
          </div>
        </div>
        <div class="card-actions">
          <div class="response-input">
            <input
              v-model="feedback.newResponse"
              type="text"
              placeholder="Type your response..."
              @keyup.enter="sendResponse(feedback)"
            />
            
            <button @click="sendResponse(feedback)">
              <v-icon icon="mdi-send" size="16"></v-icon>
            </button>
          </div>
          <button class="delete-btn" @click="deleteFeedback(feedback.id)">
            <v-icon size="18" class="delete-icon">mdi-trash-can-outline</v-icon>
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DashFeedback",
  data() {
    return {
      feedbacks: [
        {
          id: 1,
          username: "User1",
          feedback: "Great service!",
          rating: 5,
          response: "",
          newResponse: "",
        },
        {
          id: 2,
          username: "User2",
          feedback: "Could be better.",
          rating: 3,
          response: "Thank you for your feedback.",
          newResponse: "",
        },
        {
          id: 3,
          username: "User3",
          feedback: "Excellent books!",
          rating: 4,
          response: "",
          newResponse: "",
        },
        {
          id: 3,
          username: "User3",
          feedback: "Excellent books!",
          rating: 4,
          response: "",
          newResponse: "",
        },
        {
          id: 3,
          username: "User3",
          feedback: "Excellent books!",
          rating: 4,
          response: "",
          newResponse: "",
        },
        {
          id: 3,
          username: "User3",
          feedback: "Excellent books!",
          rating: 4,
          response: "",
          newResponse: "",
        },
      ],
    };
  },
  methods: {
    getStars(rating) {
      const stars = [];
      for (let i = 1; i <= 5; i++) {
        stars.push({ index: i, filled: i <= rating });
      }
      return stars;
    },
    sendResponse(feedback) {
      if (feedback.newResponse.trim()) {
        feedback.response = feedback.newResponse;
        feedback.newResponse = "";
      }
    },
    deleteFeedback(id) {
      this.feedbacks = this.feedbacks.filter((f) => f.id !== id);
    },
  },
};
</script>

<style scoped>
.dash-home {
  padding: 20px;
  width: 100%;
}
.feedbacks-container {
  display: flex;
  flex-direction: column;
  height: 654px;
  gap: 20px;
  overflow-y: auto;
}
.feedbacks-container::-webkit-scrollbar {
  display: none;
}
.feedback-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 15px;
  background-color: #f9f9f9;
}
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}
.card-header h3 {
  margin: 0;
}
.rating,
.id {
  font-size: 14px;
  color: #666;
}
.card-body {
  margin-bottom: 15px;
}
.feedback-text {
  margin: 0;
  font-size: 16px;
}
.response {
  margin-top: 10px;
  padding: 10px;
  background-color: #e0f7e0;
  border-radius: 5px;
}
.response-icon {
  color: #1a1a1a;
  margin-right: 10px; /* aligns icon with first line of text */
}
.card-actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.response-input {
  position: relative;
  flex: 1;
  margin-right: 10px;
}
.response-input input {
  width: 100%;
  padding: 8px 50px 8px 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  box-sizing: border-box;
}
.response-input button {
  position: absolute;
  right: 3px;
  top: 50%;
  transform: translateY(-50%);
  padding: 6px;
  border: 1px solid #a3c3dc;
  background-color: #d1e7ff;
  color: #0202c0;
  border-radius: 50px;
  cursor: pointer;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 55px;
  height: 35px;
}
.response-input button:hover {
  background-color: #b3d1ff;
}
.delete-btn {
  /* padding: 6px 45px; */
  width: 95px;
  height: 35px;
  background-color: #ffd1d1;
  color: #c00202;
  border: 1px solid #dca3a3;
  border-radius: 7px;
  cursor: pointer;
  font-weight: 600;
  font-size: 14px;
  /* text-align: center; */
}
.delete-btn:hover {
  background-color: #ffb3b3;
}
</style>