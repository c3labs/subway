// intersection observer for targeting data-require-light-ui header switch

// import { innerHeight, scrollY } from 'svelte/reactivity/window'

let darkmode = $state(false)


export const uiobserver = {

    get uistate() {
        return darkmode
    },
    set uistate(val: boolean) {
        darkmode = val
    },
    toggleUi() {
        darkmode = !darkmode
    }
}

$effect.root(() => {
    $effect(() => {
        if (darkmode) {
            document.documentElement.style.cssText = "--bg-state-color:var(--color-neutral-50);--bg-menu-color:var(--color-neutral-900);";
        } else {
            document.documentElement.style.cssText = "--bg-state-color:var(--color-neutral-900);--bg-menu-color:var(--color-neutral-50);";
        }
    })
})

export function uigreetz(node: HTMLDivElement) {
    console.log('Hi')

    darkmode = false;

    return {
        destroy() {
            console.log('Bye')
        }
    }
}

// export function createObserver() {

//     let scrollPercent = $state(1)

//     return {
//         get scrollPercent() {
//             return scrollPercent
//         },
//         set scrollPercent(val) {
//             scrollPercent = val
//         },
         
//     }
// }


// export const iobserver = createObserver()

// export var ioHeight = innerHeight.current
// export var ioScrollY = scrollY.current

