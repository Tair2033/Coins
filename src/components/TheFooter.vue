<template>
  <div class="wrapper">
    <div class="container">
      <footer class="footer">
        <div class="footer__lists">
          <div v-for="(list, id) in lists" :key="id" class="footer__list">
            <div class="footer__list-title">
              {{ list.title }}
            </div>

            <router-link v-for="(item, index) in list.items" :key="index" :to="item.link" class="footer__list-name">
              {{ item.name }}
            </router-link>
          </div>
        </div>

        <div class="footer__copyright">
          Copyright 2021 Coinmyte Inc. All Rights Reserved.
        </div>
      </footer>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SectionTranding',
  data() {
    return {
      lists: [
        {
          title: 'COINMYTE', items: [
            {
              name: 'Coins',
              link: '/coins'
            },
            {
              name: 'About Us',
              link: ''
            },
            {
              name: 'What We Do',
              link: ''
            },
            {
              name: 'Our Platform',
              link: ''
            }
          ]
        },
        {
          title: 'CRYPTO', items: [
            {
              name: 'Learn from Experts',
              link: ''
            },
            {
              name: 'Trading Basics',
              link: ''
            },
            {
              name: 'The Market',
              link: ''
            }
          ]
        },
        {
          title: 'OUR TEAM', items: [
            {
              name: 'The Team',
              link: ''
            },
            {
              name: 'Our Sponsors',
              link: ''
            },
            {
              name: 'Trading Experts',
              link: ''
            }
          ]
        },
        {
          title: 'LEGAL', items: [
            {
              name: 'About Us',
              link: ''
            },
            {
              name: 'What We Do',
              link: ''
            },
            {
              name: 'Our Platform',
              link: ''
            }
          ]
        }
      ]
    }
  }
});
</script>
<style lang="scss" scoped>
.wrapper {
  padding-top: 122px;
  padding-bottom: 70px;
}

.footer {

  &__lists {
    display: flex;
    justify-content: space-between;
  }

  &__list {
    display: flex;
    flex-direction: column;
  }

  &__list-title {
    font-size: 21px;
    line-height: 26px;
    color: #e7e7e7;
    font-weight: bold;
    margin-bottom: 16px;
  }

  &__list-name {
    font-size: 13px;
    line-height: 23px;
    color: #e7e7e7;
    font-weight: 500;
    text-decoration: none;
  }

  &__list-name:hover {
    color: orange;
  }

  &__copyright {
    margin-top: 60px;
    font-size: 15px;
    line-height: 18px;
    color: #e7e7e7;
    font-weight: bold;
  }
}
</style>
