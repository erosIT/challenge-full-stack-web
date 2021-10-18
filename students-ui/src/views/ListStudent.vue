<template>
  <div>
    <h2 class="pt-4 pb-3">Listagem de Estudantes</h2>
    <v-data-table
      :headers="columns"
      :items="data"
      :page.sync="page"
      :server-items-length.sync="total"
      :items-per-page.sync="perPage"
      :footer-props="{
        'items-per-page-options': [25, 50, 100],
      }"
      style="height: 90%"
      no-data-text="Nenhum estudante cadastrado"
      class="elevation-1"
      @update:page="(e) => refresh(e)"
      @update:items-per-page="(e) => refresh(e)"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-spacer></v-spacer>
          <v-btn
            elevation="2"
            color="primary"
            fixed
            bottom
            right
            @click="createStudent"
          >
            Novo Estudante
          </v-btn>
        </v-toolbar>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-icon small class="mr-2" @click="updateStudent(item)">
          mdi-pencil
        </v-icon>
        <v-icon small @click="deleteStudent(item)"> mdi-delete </v-icon>
      </template>
    </v-data-table>

    <!-- <v-tooltip top min-width="200">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          elevation="2"
          fab
          color="primary"
          fixed
          bottom
          right
          @click="createStudent"
        >
          <v-icon>mdi-plus</v-icon>
        </v-btn>
      </template>
      <span>Adicionar novo Estudante</span>
    </v-tooltip> -->
  </div>
</template>

<script lang="ts">
import { Student } from "@/models/Student";
import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({})
export default class ListStudent extends Vue {
  private page = 1;
  private perPage = 25;
  private total = 25;

  private columns = [
    { text: "RA", value: "ra" },
    { text: "Nome", align: "start", sortable: false, value: "name" },
    { text: "E-mail", sortable: false, value: "email" },
    { text: "CPF", sortable: false, value: "cpf" },
    { text: "Ações", sortable: false, value: "actions" },
  ];

  private data: Array<Record<string, string>> = [];

  private createStudent() {
    this.$router.push("/create");
  }

  private updateStudent(row: Record<string, string>) {
    const { id } = row;

    this.$router.push(`/edit/${id}`);
  }

  private async deleteStudent(row: Record<string, string>) {
    const { id } = row;
    const student = new Student();

    student.id = id;

    student
      .delete()
      .getContent()
      .then(() => {
        this.listStudents();
      })
      .catch(() => {
        //
      });
  }

  private async listStudents(perPage?: number, page?: number) {
    this.data = [];

    this.perPage = perPage ?? this.perPage;
    this.page = page ?? this.page;

    const response = await new Student().paginate(this.perPage, this.page);

    this.total = response.meta.total;
    this.data = Object.values(response.attributes);
  }

  private mounted() {
    this.listStudents();
  }

  private refresh(event: any) {
    this.listStudents();
  }
}
</script>
