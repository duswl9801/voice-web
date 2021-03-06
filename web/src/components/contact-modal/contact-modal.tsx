import * as React from 'react';
import Modal from '../modal/modal';
import { Button, LabeledInput, LabeledTextArea } from '../ui/ui';
import { Localized } from 'fluent-react';

interface Props {
  onRequestClose: () => void;
}

export default ({ onRequestClose }: Props) => (
  <Modal innerClassName="contact-modal">
    <form action="mailto:mikey@mozilla.com" method="post" encType="text/plain">
      <div className="title-and-action">
        <Localized id="contact-title">
          <h1 />
        </Localized>
        <Localized id="contact-cancel">
          <a href="javascript:void(0)" onClick={onRequestClose} />
        </Localized>
      </div>

      <br />

      <Localized id="email-input" attrs={{ label: true }}>
        <LabeledInput label="Email" name="email" required type="text" />
      </Localized>

      <Localized id="contact-form-name" attrs={{ label: true }}>
        <LabeledInput label="Name" name="name" type="text" />
      </Localized>

      <Localized id="contact-form-message" attrs={{ label: true }}>
        <LabeledTextArea label="Message" name="message" required rows={6} />
      </Localized>

      <div className="actions">
        <Localized id="contact-required">
          <div />
        </Localized>
        <Localized id="submit-form-action">
          <Button type="submit" />
        </Localized>
        <div />
      </div>
    </form>
  </Modal>
);
