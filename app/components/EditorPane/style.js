import styled from 'styled-components';
import { Tree } from 'antd';
const { TreeNode } = Tree;


export const MainMenuStyle = styled.div`

  background-color: ${props => props.theme.colors.background.dark}  !important;
  color: ${props => props.theme.colors.text.light} !important;

  height: 100%;
// cursor: pointer;


`
export const NoteHeader = styled.div`
  margin: 10px 10px 10px 10px;
`
export const NoteTitle = styled.h1`

`
export const NoteMeta = styled.div`
  margin: 5px 0 5px 0;
  color: ${props => props.theme.colors.text.muted}
`
export const NoteMetaItem = styled.div`
  display: inline;
  margin-right: 10px;
  font-size: smaller;
`
export const NoteMetaIcon = styled.span`
  margin-right: 5px;
`
export const Editor = styled.div`
  border: none;
  .CodeMirror {
    border-left: none;
    border-right: none;
    border-radius: 0;
  }
  .editor-toolbar {
    color: ${props => props.theme.colors.text.muted};
    border-top: none;
    border-left: none;
    border-right: none;

  }
`

export const MainMenuStyleOld = styled.div`
  margin: 0;
  padding: 0;
  // width: 200px;
  background-color: ${props => props.theme.colors.background.dark};
  color: ${props => props.theme.colors.text.light} !important;
  // position: fixed;
  height: 100%;
  overflow: auto;
  .ant-tree-node-content-wrapper, .ant-tree, .ant-tree-title,  {
    color: ${props => props.theme.colors.text.light} !important;
    &.ant-tree-node-selected, &.ant-tree-node-content-wrapper-normal {
      background-color: ${props => props.theme.colors.background.dark};

    }
  };


`
export const MenuItem = styled.div`
  height: 25px'
cursor: hand;
`
