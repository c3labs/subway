// intersection observer for targeting data-require-light-ui header switch

// import { innerHeight, scrollY } from 'svelte/reactivity/window'
import { type IntersectDetail } from '@svelte-put/intersect';

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

export function onIntersect(e: CustomEvent<IntersectDetail>) {
    const { observer, entries, direction } = e.detail;
    // console.log('the observer itself', observer);
    console.log('scrolling direction:', direction);
    console.log('intersecting:', entries[0]?.isIntersecting ? 'entering' : 'leaving');
    // console.log('action intersect was used on element', entries[0]?.target );
    console.log('element is requesting ui:', entries[0]?.target.dataset.uipref );
    // entries[0].target.style.backgroundColor = "red";
    console.log('list of IntersectionObserverEntry:', entries);
    console.log('list of IntersectionObserverEntry:', entries[0]?.isIntersecting );
    if(entries[0]?.isIntersecting ) {
        if(entries[0].target.dataset.uipref === "dark" ) {
            uiobserver.uistate = false;
        } else {
            uiobserver.uistate = true;
        }
    }
};

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

