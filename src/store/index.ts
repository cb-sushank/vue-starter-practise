import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import { TeamMember, MemberRole } from "@/types";

const vuexPersist = new VuexPersist({
  key: "workshop",
  storage: window.localStorage,
});

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: [{role:"Admin",name:"Sushank",email:"sushank.sakthivel@chargebee.com"},
    {role:"Team Member",name:"Xsclue",email:"sushank82000@gmail.com"},
    {role:"Team Member",name:"Arrow",email:"sushank82000@yahoo.com"}],
  },
  mutations: {
    addMember(state, member) {
      var xs=state.members.filter((m) => m.email === member.email)
      if(xs==null||xs.length==0){
        state.members.push(member);
      }
      else{
        alert("Trying to add existing registered mailid");
      }
    },
    editMember(state,member){
      state.members = state.members.filter((m) => m.email !== member.email);
      state.members.push(member);
    },
    removeMember(state, email){
      state.members = state.members.filter((member) => member.email !== email);
    }
  },
  getters: {
    listMembers(state) {
      return state.members;
    },
  },
  actions: {},
  modules: {},
  plugins: [vuexPersist.plugin],
});
