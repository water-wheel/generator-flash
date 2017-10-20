'use strict';

const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp').sync;
const Generator = require('yeoman-generator');

module.exports = class extends Generator {

    initializing() {

        let pkgJSON = {};

        try {

            pkgJSON = require(path.resolve(process.cwd(), 'package.json'));

        } catch (e) { }

        if (!pkgJSON.author || typeof pkgJSON.author == 'string') {

            let gitUser = this.user.git;

            if (pkgJSON.author) {

                let parts = /(.*)<(.*)\>/g.exec(pkgJSON.author);

                if (parts) {

                    pkgJSON.author = {

                        name: (parts[1] || '').trim(),
                        email: (parts[2] || '').trim()

                    };

                }

            } else {

                pkgJSON.author = {

                    name: gitUser.name() || '',
                    email: gitUser.email() || ''

                };

            }

        }

        this.pkgJSON = pkgJSON;

    }

    prompting() {

        let done = this.async();
        let self = this;
        let pkgJSON = this.pkgJSON;
        let folderName = path.basename(process.cwd());
        let prompts = [{

        //     name: 'componentType',
        //     message: '组件类型',
        //     type: 'list',
        //     choices: [{
        //
        //         name: 'H5',
        //         value: 'h5'
        //
        //     },{
        //
        //         name: 'PC',
        //         value: 'pc'
        //
        //     }]
        //
        // }, {

            name: 'frameType',
            message: '框架选型',
            type: 'list',
            choices: [{

                name: 'React',
                value: 'react'

            }]

        }, {

            name: 'reactComponentType',
            message: 'react组件类型',
            type: 'list',
            choices: [{

                name: 'ReactComponent',
                value: 'reactcomponent'

            }, {

                name: 'ReactSFC',
                value: 'reactsfc'

            }]

        }, {

            name: 'componentName',
            message: '请输入组件名',
            default: folderName,
            validate: function (input, answer) {

                if (!input.trim()) {

                    return '请输入组件名称';

                }

                return true;

            }


        }, {

            name: 'componentDesc',
            message: '组件描述',
            default: '组件描述内容',
            validate: function (input) {
                return !!input.trim() || '请输入组件描述!';

            }

        }, {

            name: 'author',
            message: '作者名',
            default: pkgJSON.author.name

        }, {

            name: 'email',
            message: '作者 Email',
            default: pkgJSON.author.email,
            validate: function (input) {
                return /^.+@.+\..+$/.test(input.trim()) || '请输入合法的 Email 地址!';
            }

        }, {

            name: 'groupName',
            message: '项目所在 Gitlab 分组',
            default: 'flash-component',
            validate: function (input) {
                return !!input.trim() || '请输入分组名!';
            }

        }, {

            name: 'version',
            message: '初始版本号',
            default: '0.0.1',
            validate: function (input) {
                return /^\d+\.\d+\.\d+$/.test(input.trim()) || '请输入合法的版本号!';
            }

        }, {

            name: 'installDep',
            message: '是否自动执行' + ' npm i'.yellow + ' 以安装依赖',
            type: 'confirm',
            default: false

        }];

        self.prompt(prompts).then(answer => {

            // self.componentType = answer.componentType;
            self.frameType = answer.frameType;
            self.reactComponentType = answer.reactComponentType;
            self.name = answer.componentName;
            self.desc = answer.componentDesc;
            self.author = answer.author;
            self.email = answer.email;
            self.groupName = answer.groupName;
            self.version = answer.version;
            self.installDep = answer.installDep;

            if (answer.componentName != folderName) {
                self.createRoot = true;
            }

            done();

        });
    }

    configuring () {

        this.sourceRoot(path.join(__dirname, this.frameType));

    }

    writing() {

        let outPutUrl = this.createRoot ? this.name + '/' : './';
        // let resetCss = this.componentType == 'H5' ? '' : '/index_pc';

        switch (this.frameType) {

            case 'react':


                const srcTpl = this.templatePath(`../${this.reactComponentType}`);
                this.fs.copyTpl(
                    srcTpl,
                    outPutUrl,
                    {
                        name: this.name,
                        upperCaseName: this.name.substr(0,1).toLocaleUpperCase() + this.name.substr(1),
                        author: this.author,
                        frameType: this.frameType,
                        email: this.email,
                        version: this.version,
                        desc: this.desc,
                        groupName: this.groupName,
                        // resetCss: resetCss,
                        flexibleStr: '<%= htmlWebpackPlugin.options.flexibleStr %>'
                    }
                );

                this.fs.copyTpl(
                    this.templatePath(`../_npmignore`),
                    outPutUrl + '.npmignore'
                );
                this.fs.copyTpl(
                    this.templatePath(`../_gitignore`),
                    outPutUrl + '.gitignore'
                );
                this.fs.copyTpl(
                    this.templatePath(`../_editorconfig`),
                    outPutUrl + '.editorconfig'
                );
                this.fs.copyTpl(
                    this.templatePath(`../_babelrc`),
                    outPutUrl + '.babelrc'
                );

                //add scss
                this.fs.copyTpl(
                    this.templatePath(`../../common/scss_mixin`),
                    outPutUrl + 'scss_mixin'
                );

                break;


            default:

                break;

        }
    }


    install() {
        //是否自动安装依赖 npm install
        this.installDep && this.installDependencies();
    }

};
