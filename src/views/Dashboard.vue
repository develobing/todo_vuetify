<template>
  <div class="dashboard">
    <h1 class="subheading grey--text">Dashboard</h1>

    <v-container class="my-5">
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
            <div class="a grey--text">Status</div>
            <div>{{ project.status }}</div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data: () => ({
    projects: [
      { title: 'Design a new website', person: 'Robin', due: '1st Jul 2019', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Code up the homepage', person: 'John', due: '10th Jul 2019', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Design video thumbnails', person: 'Kevin', due: '20th Jun 2018', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
      { title: 'Create a community forum', person: 'David', due: '20th Jun 2018', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt consequuntur eos eligendi illum minima adipisci deleniti, dicta mollitia enim explicabo fugiat quidem ducimus praesentium voluptates porro molestias non sequi animi!'},
    ]
  })

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
</style>
