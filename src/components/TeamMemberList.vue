<template>
  <div>
    <hr>
    <h2>Team Members({{members.length?members.length:"0"}})</h2>
    <button id='invite-button' style="background-color: #6200ea;color: #fff;border: 1px solid #6200ea;">
      <router-link style='color: #fff;text-decoration:none' to='/loading'>
        + Invite Members
      </router-link>
    </button>
    <hr>
    <b-card >
      <ul class="list-unstyled" v-for="member in members" :key="member.id">
        <b-media tag="li" :class="member.id < members.length -1 && 'border-bottom  border-secondary'">
          <template #aside>
            <b-avatar
              width="64"
              alt="placeholder"
              src="https://picsum.photos/125/125/?image=58"
            ></b-avatar>

            <div class="member-info">
              <h5 class="mt-0 mb-1">{{member.name }}</h5>
              <p class="mb-0">
                {{ member.email }}
              </p>
              <p class="mb-0">
                {{ member.role }}
              </p>
            </div>
            <div class="member-change">
              <button style="" v-on:click='editMemberButton(member)'>Edit</button>
              <button style="margin-left:20px" v-on:click='removeMemberButton(member.email)'>Remove</button>
            </div>
          </template>
        </b-media>
      </ul>
    </b-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'TeamMemberList',
  mounted(){
    document.title="Team Management";
  },
  props: {
    members: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    editMemberButton(member){
      if (confirm(`Do you want to edit the data for ${member.email}?`) == true) {
        var data=prompt("Edit name?",`${member.name}`);
        if(data!=""&&data!=null){
          const editData={
            name:data,
            email:member.email,
            role:member.role,
          };
          this.$store.commit('editMember', editData);
        }
        var data2=prompt(`Edit Role of ${data}? If you want to change enter one from the list - {Admin, Team Member, Customer Support}.`,`${member.role}`);
        if(data2=="Admin"||data2=="Team Member"||data2=="Customer Support"){
          const editData={
            name:member.name,
            email:member.email,
            role:data2,
          };
          this.$store.commit('editMember', editData);
        }
      }
    },
    removeMemberButton(email) {
      if (confirm(`Do you want to remove ${email}?`) === true) {
        this.$store.commit('removeMember', email);
      }
    },
  },
})
export default class TeamMemberList extends Vue {

}
</script>
<style scoped lang="scss">
.member-info{
margin: 12px;
text-align: left;
margin-top: 4px;

}
</style>
