// @ts-nocheck

import type { Configuration } from 'webpack';

export default function webpackClassNames(config: Configuration) {
  // regex comparison
  const regexEqual = (x, y) =>
    x instanceof RegExp &&
    y instanceof RegExp &&
    x.source === y.source &&
    x.global === y.global &&
    x.ignoreCase === y.ignoreCase &&
    x.multiline === y.multiline;

  const sassRules = config.module.rules
    .find((rule) => typeof rule.oneOf === 'object')
    .oneOf.filter((rule) => regexEqual(rule.test, /\.module\.(scss|sass)$/));

  // console.log('|| ======> sassRules', sassRules);

  sassRules.forEach((rule, i) => {
    // console.log(`|| ======> sassRules[rule] #${i} => `, rule);
    // rule.use.forEach((use, j) => {
    //   if (use.loader.includes('\\css-loader\\')) {
    //     console.log(`|| ======> sassRules[rule] #${i} => use #${j} ===>`, use);
    //   }
    // });
    rule.use.forEach((useItem) => {
      if (useItem.loader.includes('\\css-loader\\')) {
        console.log(
          `|| ======> getLocalIdent ===>`,
          useItem.options.modules.getLocalIdent
        );
        console.log(
          `|| ======> result ===>`,
          useItem.options.modules.getLocalIdent('context', "_", "exportName", "options")
        );
        // return {
        //   ...useItem,
        //   options: {
        //     ...useItem.options,
        //     modules: {
        //       ...useItem.options.modules,
        //       getLocalIdent: () => '[hash:base64:6]',
        //     },
        //   },
        // };
      }
    });
    // rule.use.forEach((use, j) =>
    //   console.log(
    //     `|| ======> sassRules[rule] #${i} => options #${j} => modules ===>`,
    //     use.options.modules?.getLocalIdent
    //   )
    // );
  });

  // sassRules.forEach((sassRule) =>
  //   sassRule.use.map((rule) => {
  //     return {
  //       ...rule,
  //       options: {
  //         ...rule.options,
  //         modules: {
  //           ...rule.modules,
  //           localIdentName: (context, localIndentName, localName, options) => {
  //             if (context.resourcePath.includes('global')) return localName;
  //             return '[hash:base64:6]';
  //           },
  //         },
  //       },
  //     };
  //   })
  // );
  // =================================================================================
  // =================================================================================
  // =================================================================================
  // // Find the base rule that contains nested rules (which contains css-loader)
  // const rules = config.module.rules.find((r) => !!r.oneOf);
  // // Iterate over the found rules
  // rules.oneOf.forEach((loaders) => {
  //   // Focus on the the loaders that have an array of `use` statements
  //   if (Array.isArray(loaders.use)) {
  //     // Iterate over each of the loaders
  //     loaders.use.forEach((l) => {
  //       // Only focus on loaders that are an object and have a `loader` property set to `css-loader`
  //       if (
  //         typeof l !== 'string' &&
  //         typeof l.loader === 'string' &&
  //         /(?<!post)css-loader/.test(l.loader)
  //       ) {
  //         // If there are no module options originally set, skip this loader
  //         if (!l.options.modules) return;
  //         const { getLocalIdent, ...others } = l.options.modules;
  //         // Create a new options object with the `getLocalIdent` property set to a function
  //         l.options = {
  //           ...l.options,
  //           modules: {
  //             ...others,
  //             getLocalIdent: (context, _, exportName, options) => {
  //               // If the class name is `dark`, return it instead of hashing it
  //               // if (localName === 'dark') return localName;
  //               // Otherwise, call the original function and return the value
  //               return getLocalIdent(context, _, exportName, options);
  //             },
  //           },
  //         };
  //       }
  //     });
  //   }
  // });
  // =================================================================================
  // =================================================================================
  // =================================================================================
  // return config;
}
