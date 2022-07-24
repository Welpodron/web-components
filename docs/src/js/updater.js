export function onRouteDidUpdate({location, previousLocation}) {
    // Don't execute if we are still on the same page; the lifecycle may be fired
    // because the hash changes (e.g. when navigating between headings)
    if (location.pathname !== previousLocation?.pathname) {
        if (window.welpodron) {
            if (window.welpodron.collapse) {
                window.welpodron.collapsesList = [];

                document.querySelectorAll('[data-collapse]').forEach((element) => {
                  window.welpodron.collapsesList.push(
                    new window.welpodron.collapse({
                      dom: element
                    })
                  );
                });
            }

            if (window.welpodron.accordion) {
                window.welpodron.accordionsList = [];

                document.querySelectorAll('[data-accordion]').forEach((element) => {
                window.welpodron.accordionsList.push(
                    new window.welpodron.accordion({
                    dom: element
                    })
                );
                });
            }

            if (window.welpodron.modal) {
                window.welpodron.modalsList = [];
                window.welpodron.modalsActiveList = new Set();
            
                document.querySelectorAll('[data-modal]').forEach((element) => {
                  window.welpodron.modalsList.push(
                    new window.welpodron.modal({
                      dom: element
                    })
                  );
                });
            }

            if (window.welpodron.tabs) {
                window.welpodron.tabsList = [];

                document.querySelectorAll('[data-tabs]').forEach((element) => {
                  window.welpodron.tabsList.push(
                    new window.welpodron.tabs({
                      dom: element
                    })
                  );
                });
            }

            if (window.welpodron.carousel) {
                window.welpodron.carouselList = [];

                document.querySelectorAll('[data-carousel]').forEach((element) => {
                  window.welpodron.carouselList.push(
                    new window.welpodron.carousel({
                      dom: element
                    })
                  );
                });
            }
        }
    }
  }