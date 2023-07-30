<template>
  <!-------------------- HEADER - MENU GENERAL -------------------->
  <b-navbar-nav class="nav">
    <b-nav-item v-for="(bookmark, index) in modulos" :id="`bookmark-${index}`" :key="index" :to="bookmark.route" @click="Setear(bookmark.value)">
      <feather-icon
        :icon="bookmark.icon"
        size="21"
      />
      <b-tooltip triggers="hover" :target="`bookmark-${index}`" :title="bookmark.value" :delay="{ show: 1000, hide: 50 }"/>
    </b-nav-item>
  </b-navbar-nav>
</template>

<script>
import {
  BNavbarNav, BNavItem, BTooltip, BNavItemDropdown, BFormInput, BDropdownItem,
} from 'bootstrap-vue'
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import useAutoSuggest from '@core/components/app-auto-suggest/useAutoSuggest'
import { ref, watch } from '@vue/composition-api'
import router from '@/router'
import store from '@/store'
import searchAndBookmarkData from '../search-and-bookmark-data'

export default {
  components: {
    BNavbarNav, BNavItem, BTooltip, BNavItemDropdown, BFormInput, VuePerfectScrollbar, BDropdownItem,
  },
  setup() {
    const searchAndBookmarkDataPages = ref(searchAndBookmarkData.pages)
    const bookmarks = ref(searchAndBookmarkData.pages.data.filter(page => page.isBookmarked))
    const currentSelected = ref(-1)

    const perfectScrollbarSettings = {
      maxScrollbarLength: 60,
    }

    const {
      searchQuery,
      resetsearchQuery,
      filteredData,
    } = useAutoSuggest({ data: { pages: searchAndBookmarkDataPages.value }, searchLimit: 6 })

    watch(searchQuery, val => {
      store.commit('app/TOGGLE_OVERLAY', Boolean(val))
    })

    watch(filteredData, val => {
      currentSelected.value = val.pages && !val.pages.length ? -1 : 0
    })

    const suggestionSelected = () => {
      const suggestion = filteredData.value.pages[currentSelected.value]
      router.push(suggestion.route).catch(() => {})
      resetsearchQuery()
    }

    const toggleBookmarked = item => {
      // Find Index of item/page in bookmarks' array
      const pageIndexInBookmarks = bookmarks.value.findIndex(i => i.route === item.route)

      // If index is > -1 => Item is bookmarked => Remove item from bookmarks array using index
      // Else => Item is not bookmarked => Add item to bookmarks' array
      if (pageIndexInBookmarks > -1) {
        bookmarks.value[pageIndexInBookmarks].isBookmarked = false
        bookmarks.value.splice(pageIndexInBookmarks, 1)
      } else {
        bookmarks.value.push(item)
        bookmarks.value[bookmarks.value.length - 1].isBookmarked = true
      }
    }

    return {
      bookmarks,
      modulos: [
      { title: 'Personal', route: { name: 'access-control' }, icon: 'UserIcon', isBookmarked: true, value: 'PERSONAL' },
      { title: 'Asistencia', route: { name: 'access-control' }, icon: 'ClockIcon', isBookmarked: true, value: 'ASISTENCIA' },
      { title: 'Planilla', route: { name: 'access-control' }, icon: 'UsersIcon', isBookmarked: true, value: 'PLANILLA' },
      { title: 'Finanzas', route: { name: 'access-control' }, icon: 'DollarSignIcon', isBookmarked: true, value: 'FINANZA' },
      { title: 'Transporte', route: { name: 'access-control' }, icon: 'TruckIcon', isBookmarked: true, value: 'TRANSPORTE' },
      { title: 'Mantenimiento', route: { name: 'access-control' }, icon: 'SettingsIcon', isBookmarked: true, value: 'MANTENIMIENTO' },
      { title: 'Neumáticos', route: { name: 'access-control' }, icon: 'DiscIcon', isBookmarked: true, value: 'NEUMATICO' },
      { title: 'Combustible', route: { name: 'access-control' }, icon: 'FilterIcon', isBookmarked: true, value: 'COMBUSTIBLE' },
      { title: 'Logistica', route: { name: 'access-control' }, icon: 'BoxIcon', isBookmarked: true, value: 'LOGISTICA' },
      { title: 'Gestion', route: { name: 'access-control' }, icon: 'BarChartIcon', isBookmarked: true, value: 'GESTION' },
      { title: 'SSoma', route: { name: 'access-control' }, icon: 'LayersIcon', isBookmarked: true, value: 'SSOMA' },
      { title: 'Gps', route: { name: 'access-control' }, icon: 'MapPinIcon', isBookmarked: true, value: 'GPS' },
    ],
      perfectScrollbarSettings,
      currentSelected,
      suggestionSelected,
      toggleBookmarked,

      // AutoSuggest
      searchQuery,
      resetsearchQuery,
      filteredData,
    }
  },
  methods : {
    Setear(prm_bookmark)
    {
      this.$root.appModule = prm_bookmark;
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~@core/scss/base/bootstrap-extended/include';

ul
{
  list-style: none;
  padding: 0;
  margin: 0;
}
p {
  margin: 0;
}

.nav-bookmar-content-overlay {
    position: fixed;
    opacity: 0;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-transition: all 0.7s;
    transition: all 0.7s;
    z-index: -1;

    &:not(.show) {
      pointer-events: none;
    }

    &.show {
      cursor: pointer;
      z-index: 10;
      opacity: 1;
    }
}
</style>
