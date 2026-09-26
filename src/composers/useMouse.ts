import { ref } from "vue";

const mouse = ref([0, 0]);

function trackMouse(target: typeof mouse) {
    if (import.meta.env.SSR) return;
    window.addEventListener("mousemove", (e) => {
        target.value = [e.clientX, e.clientY];
    });
}
trackMouse(mouse);

export function useMouse() {
    const result = ref([...mouse.value]);
    trackMouse(result);
    return result;
}
