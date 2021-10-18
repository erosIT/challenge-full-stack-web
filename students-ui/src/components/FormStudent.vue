<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12" v-if="!!presenter.id">
          <v-text-field
            disabled
            v-model="presenter.ra"
            label="RA"
            required
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" md="4">
          <v-text-field
            v-model="presenter.name"
            :rules="nameRules"
            label="Nome"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            v-model="presenter.email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4">
          <v-text-field
            :disabled="!!presenter.id"
            v-model="presenter.cpf"
            :rules="cpfRules"
            label="CPF"
            required
            v-mask="'999.999.999-99'"
          ></v-text-field>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <v-btn style="margin-right: 20px" color="primary" @click="save">
            Salvar
          </v-btn>
          <v-btn @click="cancel">Cancelar</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script lang="ts">
import { StudentPresenter } from "@/presenters/StudentPresenter";
import Vue from "vue";
import Component from "vue-class-component";
import { Prop } from "vue-property-decorator";

@Component({})
export default class FormStudent extends Vue {
  private valid = false;

  @Prop({
    default: () => new StudentPresenter(),
  })
  presenter!: StudentPresenter;

  private nameRules = [
    (value: string): boolean | string =>
      !!value || "O Campo Nome é obrigatório",
  ];

  private emailRules = [
    (values: string): boolean | string =>
      !!values || "O Campo E-mail é obrigatório",
    (values: string): boolean | string =>
      /.+@.+/.test(values) || "E-mail precisar ser valido",
  ];

  private cpfRules = [
    (value: string): boolean | string => !!value || "O Campo CPF é obrigatório",
  ];

  private save(): void {
    if (!(this.$refs as any).form.validate()) {
      return;
    }

    this.$emit("save", this.presenter);
  }

  private cancel(): void {
    this.$router.back();
  }
}
</script>
