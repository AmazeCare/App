import React from 'react'
import Header from 'components/Header'
import Paragraph from 'components/common/paragraph';

export default function RecreationCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Recreation Care" />
      <section className="py-20 text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph>
              <p>
                Are you worried that your loved one is at the home unable to move due to a physical disability,
                not to worry our recreational therapist can take care of this issue we have several programs
                tailored that the clients can choose from even if its bowling, sailing, fishing the list goes on,
                it all depends what is the best for the client.
              </p>
              <p>Call us to find out.</p>
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}
