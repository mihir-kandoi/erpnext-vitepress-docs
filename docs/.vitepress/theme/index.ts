import DefaultTheme from "vitepress/theme";
import { h, nextTick, onMounted, onUnmounted, watch } from "vue";
import { useRoute } from "vitepress";
import "./layout.css";

function expandActiveRootGroup() {
  requestAnimationFrame(() => {
    const caret = document.querySelector<HTMLElement>(
      ".VPSidebarItem.level-0.collapsible.is-active.collapsed > .item > .caret",
    );

    caret?.click();
  });
}

function expandClickedRootGroup(event: MouseEvent) {
  const link = (event.target as Element | null)?.closest(
    ".VPSidebarItem.level-0.collapsible.is-link > .item > .link",
  );
  const root = link?.closest(".VPSidebarItem.level-0");
  const caret =
    link?.parentElement?.querySelector<HTMLElement>(":scope > .caret");

  if (
    root?.classList.contains("is-active") &&
    !root.classList.contains("collapsed")
  ) {
    event.preventDefault();
    event.stopPropagation();
  }

  caret?.click();
}

export default {
  extends: DefaultTheme,
  Layout() {
    return h(DefaultTheme.Layout);
  },
  setup() {
    const route = useRoute();

    onMounted(() => {
      document.addEventListener("click", expandClickedRootGroup, true);
      void nextTick(expandActiveRootGroup);
    });

    onUnmounted(() => {
      document.removeEventListener("click", expandClickedRootGroup, true);
    });

    watch(
      () => route.path,
      () => {
        void nextTick(expandActiveRootGroup);
      },
    );
  },
};
