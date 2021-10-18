<template>
  <div>
    <h2 class="pt-4 pb-3">Criar novo Estudante</h2>

    <form-student @save="create"></form-student>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormStudent from "@/components/FormStudent.vue";
import { Student } from "@/models/Student";
import { StudentPresenter } from "@/presenters/StudentPresenter";

@Component({
  components: {
    FormStudent,
  },
})
export default class CreateStudent extends Vue {
  private async create(studentPresenter: StudentPresenter): Promise<void> {
    const student = new Student();

    student.attributes["name"] = studentPresenter.name;
    student.attributes["cpf"] = studentPresenter.cpf
      ?.replaceAll(".", "")
      .replace("-", "");
    student.attributes["email"] = studentPresenter.email;

    student
      .save()
      .then(() => {
        this.$router.back();
      })
      .catch(() => {
        //
      });
  }
}
</script>
