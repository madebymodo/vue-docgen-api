import { IGNORE_DEFAULT, getDescription, getComment } from './variables'
import processTags from './processTags'

export default function processComponents(docFile, component) {
  docFile = docFile.slice()
  let components = component.components

  const listDocParts = []
  const listDocComponents = {}
  if(components){
    Object.keys(components).forEach(key => {
      const componentName = key
      const _component = {}
      const docPart = docFile.filter(comment => {
        const componentNameDoc = comment.longname.split('components.')[1]
        return componentNameDoc === componentName && listDocParts.indexOf(componentNameDoc) === -1
      })[0]
      if (docPart) {
        listDocParts.push(docPart.longname)
        _component['tags'] = processTags(docPart, IGNORE_DEFAULT)
        _component['comment'] = getComment(docPart)
        _component['description'] = getDescription(docPart)
      }
      listDocComponents[componentName] = _component
    })
    return listDocComponents
  }
  return
}
