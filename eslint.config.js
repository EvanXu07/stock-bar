import antfu from '@antfu/eslint-config'

export default antfu({
  ignores: [
    'src-tauri/target',
    'src-tauri/gen',
  ],
})
