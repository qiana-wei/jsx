import babelPluginTransformVueJsx from '@vue/babel-plugin-transform-vue-jsx'
import babelSugarFunctionalVue from '@vue/babel-sugar-functional-vue'
import babelSugarInjectH from '@vue/babel-sugar-inject-h'
import babelSugarCompositionApiInjectH from '@vue/babel-sugar-composition-api-inject-h'
import babelSugarCompositionApiRenderInstance from '@vue/babel-sugar-composition-api-render-instance'
import babelSugarVModel from '@vue/babel-sugar-v-model'
import babelSugarVOn from '@vue/babel-sugar-v-on'

export default (_, { functional = true, injectH = true, vModel = true, vOn = true, compositionAPI = false } = {}) => {
  return {
    plugins: [
      functional && babelSugarFunctionalVue,
      injectH && (compositionAPI ? babelSugarCompositionApiInjectH : babelSugarInjectH),
      vModel && babelSugarVModel,
      vOn && babelSugarVOn,
      compositionAPI && babelSugarCompositionApiRenderInstance,
      babelPluginTransformVueJsx,
    ].filter(Boolean),
  }
}
