class Notify {
    send(template: string, to: string) {
        console.log(`Send ${template} to ${to}`)
    }
}

class Log {
    log(msg: string) {
        console.log(msg)
    }


}

class Template {
    private templates = [
        {name: 'other', template: `<h1>Шаблон!<h1/>`}
    ]

    getByName(name: string) {
        return this.templates.find(t => t.name === name)
    }
}


class NotificationFacade {
    private notify: Notify
    private logger: Log
    private template: Template

    constructor() {
        this.notify = new Notify;
        this.logger = new Log();
        this.template = new Template();
    }

    send(to: string, templateName: string) {
        const data = this.template.getByName(templateName)
        if (!data) {
            this.logger.log('No pattern found')
            return
        }
        this.notify.send(data.template, to)
        this.logger.log('Pattern sent')
    }
}


const s = new NotificationFacade()
s.send('ds@gmail.com', 'other')
