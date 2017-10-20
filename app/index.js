"use strict";

const Generator = require('yeoman-generator');
const inquirer = require('inquirer');
const endTip = require('../_libs/end-tip');
const FlashLogo = require('../_libs/logo');

module.exports = class extends Generator {

    initializing() {

        let done = this.async();

        this.pkg = require('../package.json');

        FlashLogo(this, done);

    }

    prompting() {

        let self = this;
        let done = this.async();
        let prompts = [{

            type: 'list',
            name: 'boilerplateType',
            message: '你准备创建',
            choices: [{

                name: '项目(yo flash:project)',
                value: 'project'

            }, {

                name: '组件(yo flash:component)',
                value: 'component'

            }],

        }];

        inquirer.prompt(prompts).then(answer => {

            self.composeWith('flash:' + answer.boilerplateType)
            done();

        });

    }

    writing() {

        console.log('writing')

    }

    end () {

        endTip('Project');

    }
};

