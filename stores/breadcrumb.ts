// stores/counter.js
import { defineStore } from "pinia";
interface Breadcrumb {
  label: string;
  to?: string;
  icon?: string;
}

export const useBreadcrumbStore = defineStore("breadcrumb", {
  state: () => {
    return { links: [] as Breadcrumb[] };
  },
  actions: {
    setLinks() {
      const route = useRoute();
      var paths = route.path.split("/");
      var term: Breadcrumb[] = [];

      for (let index = 0; index < paths.length; index++) {
        const element = paths[index];
        if (element == "" && index + 1 == paths.length) {
          continue;
        }
        let pth = paths.slice(0, index + 1).join("/");
        pth=pth.replace('/','')
        var breadcrumb: Breadcrumb = {
          label: element,
          to: "/" + pth,
        };

        pages.forEach((value, key) => {
          if (value.path == "/" + element) {
            breadcrumb.label = value.name;
          }
        });

        if (element == "") {
          breadcrumb.label = "Home";
        }
        if (paths.length - 1 == index) {
          breadcrumb.to = undefined;
        }
        term.push(breadcrumb);
      }
      this.links = term;
    },
  },
});
