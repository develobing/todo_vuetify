<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
      <v-layout row class="mb-3">
        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('title')" slot="activator">
            <v-icon left>folder</v-icon>
            <span class="caption text-lowercase">By project name</span>
          </v-btn>
          <span>Sort projects by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <v-btn small flat color="grey" @click="sortBy('person')" slot="activator">
            <v-icon left>person</v-icon>
            <span class="caption text-lowercase">By person</span>
          </v-btn>
          <span>Sort project by person name</span>
        </v-tooltip>
      </v-layout>

      <v-card flat class="pa-1" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="a grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="a grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="a grey--text">Due bye</div>
            <div>{{ project.due }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="right">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import db from '@/fb'

export default {
  name: 'Dashboard',
  data: () => ({
    projects: []
  }),
  created() {
    this.setDb()
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
    },
    setDb() {
      db.collection('projects').onSnapshot(res => {
        const changes = res.docChanges()
        
        changes.forEach(change => {
          if(change.type === 'added') {
            this.projects.push({
              id: change.doc.id,
              ...change.doc.data()
            })
          }
        })
      })
    }
  }
}
</script>

<style scoped>
.project.complete {
  border-left: 4px solid lightseagreen;
}
.project.ongoing {
  border-left: 4px solid orange;
}
.project.overdue {
  border-left: 4px solid tomato;
}
.v-chip.complete {
  background-color: lightseagreen;
}
.v-chip.ongoing {
  background-color: orange;
}
.v-chip.overdue {
  background-color: tomato;
}
</style>
