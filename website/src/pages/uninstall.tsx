import * as React from 'react'

export default class Uninstall extends React.Component<any, any> {
    public componentDidMount(): void {
        const script = document.createElement('script')
        script.src = '//js.hsforms.net/forms/v2.js'
        const hubspot = document.getElementById('hubspotEditorForm')
        hubspot.appendChild(script)
        script.addEventListener('load', () => {
            ;(window as any).hbspt.forms.create({
                portalId: '2762526',
                formId: 'a1bc77c9-019c-4f83-b5ba-327949f8e587',
                target: '#hubspotEditorForm',
            })
        })
    }

    public render(): JSX.Element | null {
        return (
            <div className="uninstall">
                <section className="uninstall__header">
                    <h1>Thank you for using Sourcegraph</h1>
                </section>
                <section className="uninstall__body">
                    <div className="measure-wide center">
                        <div className="uninstall__form">
                            <h3 className="f4"> Why did you uninstall Sourcegraph for GitHub? </h3>
                            <p>Your feedback helps us improve the product for everyone.</p>
                            <div id="hubspotEditorForm" />
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
