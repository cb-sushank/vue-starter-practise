<template>
  <div>
    <hr>
    <h2>Add Member</h2>
    <hr>
    <form @submit.prevent="addMember"> 
        <label for="name">Name:</label>
        <input type="text" class="name" name="name" id="name" style="margin-left:10px;" placeholder="name" v-model="name" required><br><br>
        <label for="email">Mail Id:</label> 
        <input type="email" class="email" name="email" id="email" style="margin-left:10px;" placeholder="mail id" v-model="email" required><hr>
        <input type="radio" class="role" name="role" id="Admin" value="Admin" v-model="role" required>
        <label for="Admin">Admin</label><br>
        <input type="radio" class="role" name="role" id="Team Member" value="Team Member" v-model="role" required>
        <label for="Team Member">Team Member</label><br>
        <input type="radio" class="role" name="role" id="Customer Support" value="Customer Support" v-model="role" required>
        <label for="Customer Support">Customer Support</label><br><br>
        <span>Role: {{ role }}</span><br><br><br>
        <button style="background-color: #6200ea;color: #fff;border: 1px solid #6200ea;" type="submit">Add</button>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: "TeamMemberList",
  mounted(){
    document.title="Add Team Member";
  },
  data(){
    return{
      name:"",
      email:"",
      role:"",
    };
  },
  methods: {
    addMember(){
      const newData={
        name:this.$data.name,
        email:this.$data.email,
        role:this.$data.role,
      };
      this.$store.commit("addMember",newData);
      this.$router.push("/");
    },
  },
})
export default class InviteMembers extends Vue {
  
}
</script>
<style scoped lang="scss">

</style>
