<template>
  <div class="faq">
    <h1 class="text-center mb-6">Frequently Asked Questions</h1>
    <v-row no-gutters>
      <v-col cols="12" md="8" offset-md="2" lg="6" offset-lg="3">
        <v-expansion-panels accordion>
          <v-expansion-panel
            v-for="(item, i) in items"
            :key="i"
            class="transparent"
          >
            <v-expansion-panel-header>
              <h4>{{ item.summary }}</h4>
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.details }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'FAQ',

  data: () => ({
    items: [
      {
        summary: 'What does Google know about me?',
        details:
          'Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with Polygon!). And that’s just the tip of the iceberg. Learn more.'
      },
      {
        summary: 'Why use Polygon instead of Google?',
        details:
          'Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with Polygon!). And that’s just the tip of the iceberg. Learn more.'
      },
      {
        summary: 'How popular is Ploygon?',
        details:
          'Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with Polygon!). And that’s just the tip of the iceberg. Learn more.'
      },
      {
        summary: 'How does the Ploygon app & extension work?',
        details:
          'Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with Polygon!). And that’s just the tip of the iceberg. Learn more.'
      },
      {
        summary: 'Why use Polygon instead of Google?',
        details:
          'Not only does Google keep your search history forever by default, their trackers have been found on 75% of the top million websites, which means they are tracking most everywhere you go on the Internet (unless you stop them with Polygon!). And that’s just the tip of the iceberg. Learn more.'
      }
    ]
  })
};
</script>

<style scoped>
.v-expansion-panel::before {
  box-shadow: none;
}
</style>
