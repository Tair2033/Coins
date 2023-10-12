<template>
  <div class="wrapper">
    <div class="container">
      <div class="news">
        <div class="news__title">
          Last News
        </div>

        <div class="news__wrapper">
          <div
            v-if="getStatus()"
            class="news__content"
          >
            <div class="news__items">
              <TransitionGroup name="list">
                <a
                  v-for="(news, id) in newsCollection"
                  :key="id"
                  class="news__items-item"
                  :href="news.link"
                >
                  <div class="item">
                    {{ news.title }}
                  </div>

                  <div class="item__bottom">
                    <div class="item__read">
                      Continue reading...
                    </div>

                    <div class="item__time">
                      {{ new Date(news.date).getDay() }}.{{ new Date(news.date).getMonth() }}.{{ new Date(news.date).getFullYear() }}
                    </div>
                  </div>
                </a>
              </TransitionGroup>
            </div>
          </div>

          <div
            v-if="!getStatus()"
            class="loading"
          >
            <BaseLoader />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import BaseLoader from '@/UI/BaseLoader.vue'
import { defineComponent } from 'vue'
import store from '@/store';

export default defineComponent({
  name: "NewsView",
  components: { BaseLoader },
  data() {
    return {
      newsCollection: [] as any
    };
  },
  mounted() {
    this.getNews();
  },
  methods: {
    async getNews() {
      const URL = `https://eodhd.com/api/news?api_token=demo&s=AAPL.US&offset=0&limit=10`;
      const response = await fetch(URL, {
        method: "GET"
      });
      const data = await response.json();
      this.newsCollection = [...data];

      store.commit('changeNewsLoadingStatus');

      console.log(data);
    },
    getStatus() {
      return store.getters.getNewsLoadingStatus
    }
  }
})
</script>

<style scoped lang="scss">
.list-enter-active,
.list-leave-active {
  transition: opacity 2s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
}

.wrapper {
  min-height: 90vh;
}

.loading {
  width: 100%;
  display: flex;
  justify-content: center;
}

.news {
  &__title {
    font-size: 30px;
  }

  &__wrapper {}

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__items {
    max-width: 600px;
  }

  &__items-item {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    margin: 10px 10px 10px 0;
    padding: 10px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.486);
    color: white;
    text-decoration: none;
  }

  &__items-item:hover {
    background-color: rgba(255, 255, 255, 0.105);
    text-shadow: #ffffff 0px 0px 20px, #ff2d9649 0px 0px 30px,
      #ff2d9649 0px 0px 50px, -1px 2px 20px rgba(236, 72, 255, 0);
  }
}

.item {
  &__read {
    text-decoration: underline;
    opacity: 0.6;
    align-self: flex-end;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 15px;
  }

  &__time {
    font-size: 13px;
    font-style: italic;
    color: rgb(151, 149, 149);
  }
}
</style>