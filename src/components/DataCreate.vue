<script setup>
import PersonService from '../services/personService';
import {ref} from 'vue';

let newPersonName = "";

const createPerson = async (event) => {
    event.preventDefault();

    try {
        const response = await PersonService.addPerson(newPersonName);
        newPersonName = "";
        window.location.reload();
    } catch (error){
        console.error("Error adding person:", error);
    }
};

</script>

<template>
    <div class="container">
      <div class="row">
        <div class="col-md-7">
          <form @submit="createPerson">
            <div class="input-group">
              <input v-model="newPersonName" type="text" class="form-control" placeholder="New Person...">
              <button type="submit" class="btn btn-success">Create</button>
            </div>
          </form>
        </div>
      </div>
    </div>
</template>