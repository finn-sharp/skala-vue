import { defineConfig, globalIgnores } from 'eslint/config'
import globals from 'globals'
import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import pluginOxlint from 'eslint-plugin-oxlint'
import skipFormatting from 'eslint-config-prettier/flat'

export default defineConfig([
  {
    name: 'app/files-to-lint',
    files: ['**/*.{vue,js,mjs,jsx}'],
  },

  globalIgnores(['**/dist/**', '**/dist-ssr/**', '**/coverage/**']),

  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
    },
  },

  js.configs.recommended,
  ...pluginVue.configs['flat/essential'],

  ...pluginOxlint.buildFromOxlintConfigFile('.oxlintrc.json'),
  {
    name: 'app/custom-rules',
    rules: {
      // 단일 단어 컴포넌트 이름 경고/에러 비활성화
      'no-unused-vars':'warn', //안쓰는 변수를 경고처리하는 거 끄는 규칙
      'no-console':'off', // 개발할 때는 사용하고 배포할 때는 꺼버림
      'vue/multi-word-component-names': 'off',
    }
  },
  skipFormatting,
])
