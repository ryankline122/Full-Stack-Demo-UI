<script>
import PersonService from '@/services/personService';

export default {
  data() {
    return {
      persons: [],
    };
  },
  async created() {
    try {
      const response = await PersonService.getAllPersons();
      this.persons = response.data;
    } catch (error) {
      console.error('Error fetching persons:', error);
    }
  },
};
</script>

<template>
    <table class="table">
    <thead>
        <tr>
        <th scope="col">Name</th>
        <th scope="col">ID</th>
        </tr>
    </thead>
    <tbody>
        <tr v-for="person in persons" :key="person.id">
            <td>{{ person.name }}</td>
            <td>{{ person.id}}</td>
        </tr>
    </tbody>

    </table>
</template>