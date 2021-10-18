import Axios, { AxiosInstance } from "axios";

declare module "vue/types/vue" {
  interface Vue {
    $request: AxiosInstance;
  }
}

const headers: Record<string, string> = {
  "Content-Type": "application/json",
};

export default {
  install(Vue: any): void {
    Vue.prototype.$request = Axios.create({
      baseURL: "http://127.0.0.1",
      headers: headers,
    });
  },
};
