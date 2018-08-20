import {
  JupyterLab, JupyterLabPlugin
} from '@jupyterlab/application';

import '../style/index.css';


/**
 * Initialization data for the button extension.
 */
const extension: JupyterLabPlugin<void> = {
  id: 'button',
  autoStart: true,
  activate: (app: JupyterLab) => {
    console.log('JupyterLab extension button is activated!');
  }
};

export default extension;
