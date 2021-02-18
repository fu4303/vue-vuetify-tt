<template>
  <div>
    <div class="d-flex justify-end container">
      <v-menu offset-y>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            v-bind="attrs"
            v-on="on"
            icon
            color="secondary"
            plain
            :ripple="false"
          >
            <v-icon>mdi-bullhorn-outline</v-icon>
            <v-icon>mdi-chevron-down</v-icon>
          </v-btn>
        </template>
        <v-list dense>
          <v-list-item
            v-for="(item, index) in dropdownItems"
            :key="index"
            :to="item.to"
            link
          >
            <v-list-item-icon class="mr-2">
              <v-icon dense :color="item.color">{{ item.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-menu>

      <v-app-bar-nav-icon
        @click="drawer = true"
        class="ml-3"
      ></v-app-bar-nav-icon>
    </div>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
      right
      class="mx-auto"
      height="100vh"
    >
      <div class="d-flex justify-end">
        <v-btn
          class="mx-2"
          color="grey"
          plain
          small
          fab
          @click="drawer = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </div>

      <v-list nav dense>
        <v-list-item-group color="secondary" class="mb-4">
          <v-subheader>SETTINGS</v-subheader>
          <v-list-item
            v-for="item in settings"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group color="secondary" class="mb-4">
          <v-subheader> PRIVACY ESSENTIALS </v-subheader>
          <v-list-item
            v-for="item in privacy"
            :key="item.title"
            :to="item.to"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group color="secondary" class="mb-4">
          <v-subheader> WHY PRIVACY </v-subheader>
          <v-list-item v-for="item in why" :key="item.title" :to="item.to" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group color="secondary" class="mb-4">
          <v-subheader> WHO WE ARE </v-subheader>
          <v-list-item v-for="item in who" :key="item.title" :to="item.to" link>
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>

        <v-list-item-group color="secondary">
          <v-subheader> KEEP IN TOUCH </v-subheader>
          <v-list-item
            v-for="item in keep"
            :key="item.title"
            :to="item.href"
            link
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    drawer: false,
    group: null,
    dropdownItems: [
      { title: 'Twitter', icon: 'mdi-twitter', color: 'blue', to: '/twitter' },
      { title: 'Reddit', icon: 'mdi-reddit', color: 'red', to: '/reddit' },
      {
        title: 'Blog',
        icon: 'mdi-comment-text-outline',
        color: 'purple',
        to: '/blog'
      },
      {
        title: 'Newsletter',
        icon: 'mdi-email',
        color: 'yellow',
        to: '/newsletter'
      }
    ],
    settings: [
      { title: 'Themes', to: '/themes' },
      { title: 'All Settings', to: '/settings' },
      {
        title: '!Bang Search Shortcuts',
        to: '/search'
      }
    ],
    privacy: [
      { title: 'Private Search', to: '/private-search' },
      { title: 'App and Extension', to: '/extension' }
    ],
    why: [
      { title: 'Privacy Blog', to: '/blog' },
      { title: 'Privacy Crash Course', to: '/course' },
      { title: 'Help Spread Privacy', to: '/help' }
    ],
    who: [
      { title: 'About Us', to: '/about' },
      { title: 'Privacy Policy', to: '/privacy' },
      { title: 'Careers', to: '/careers' },
      { title: 'Press Kit', to: '/press' }
    ],
    keep: [
      { title: 'Twitter', to: '/twitter' },
      { title: 'Reddit', to: '/reddit' },
      { title: 'Help', to: '/help' }
    ]
  })
};
</script>
