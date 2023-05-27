import { categories } from './categories';
import { payloads } from './payloads';

function getTabsExecScriptCode(payload: string, targetElementId: number) {
   let quoteFormat = '"';
   const hasSingleQuoteInString = payload.includes("'");
   if (hasSingleQuoteInString) quoteFormat = "'";
   return (
      `elem = browser.menus.getTargetElement(${targetElementId}); ` +
      `elem.value=${quoteFormat}${payload}${quoteFormat}`
   );
}

function buildCategoriesMenu(categories: { id: string; title: string }[]) {
   categories.map(({ id, title }) =>
      browser.menus.create({
         id,
         title,
         documentUrlPatterns: ['*://*/*'],
         contexts: ['editable'],
      }),
   );
}

function buildPayloadsMenu(
   payloads: { id: string; parentId: string; payload: string }[],
) {
   payloads.map(({ id, payload: title, parentId }) =>
      browser.menus.create({
         id,
         title,
         parentId,
         documentUrlPatterns: ['*://*/*'],
         contexts: ['editable'],
      }),
   );
}

const onClickBrowser = (
   { menuItemId, targetElementId, frameId }: browser.menus.OnClickData,
   { id: tabId }: browser.tabs.Tab | undefined,
) => {
   payloads.map(({ id, payload }) => {
      if (id !== menuItemId) return;
      browser.tabs.executeScript(tabId, {
         frameId,
         code: getTabsExecScriptCode(payload, targetElementId),
      });
   });
};

function main() {
   buildCategoriesMenu(categories);
   buildPayloadsMenu(payloads);
   browser.menus.onClicked.addListener(onClickBrowser);
}

main();
