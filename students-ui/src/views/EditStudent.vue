<template>
  <div>
    <h2 class="pt-4 pb-3">Editar Estudante</h2>

    <form-student
      v-if="studentPresenter.id"
      @save="update"
      :presenter="studentPresenter"
    ></form-student>
  </div>
</template>

<script lang="ts">
import { Student } from "@/models/Student";
import Vue from "vue";
import { Component } from "vue-property-decorator";
import FormStudent from "@/components/FormStudent.vue";
import { StudentPresenter } from "@/presenters/StudentPresenter";

@Component({
  components: {
    FormStudent,
  },
})
export default class EditStudent extends Vue {
  private studentPresenter: StudentPresenter = new StudentPresenter();

  private async getStudent(): Promise<void> {
    const { id } = this.$route.params;

    const student = await new Student().find(id).getContent();

    if (!student.id) {
      return;
    }

    this.studentPresenter = student;
  }

  private update(studentPresenter: StudentPresenter) {
    const student = new Student();

    student.id = studentPresenter.id;
    student.attributes["name"] = studentPresenter.name;
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

  private mounted() {
    this.getStudent();
  }
}
</script>
