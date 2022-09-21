import React from 'react'

import IcoChevronDown12 from './assets/ico_chevron_down12'
import IcoSocialWebsite from './assets/ico_social_website'
import IcoSocialTelegram from './assets/ico_social_telegram'
import IcoSocialGithub from './assets/ico_social_github'
import IcoSocialReddit from './ico_social_reddit'

export default function EnsComponentExpanded(
  props: EnsComponentExpandedInterface
) {
  return (
    <>
      {props.type === 'TYPE0' && (
        <div className="inline-flex w-[460px] flex-col items-start gap-4 rounded-2xl border-4 border-solid border-[rgba(242,242,242,1)] bg-white px-4 py-5 text-left font-['Roboto_Mono'] font-bold drop-shadow-lg">
          <div className="flex w-[428px] items-center gap-2 self-stretch text-xl leading-7 text-black">
            <div className="h-10 w-10 rounded-full" />
            <div className="flex-1 gap-1">
              <p className="w-full">domain.eth</p>
            </div>
            <IcoChevronDown12 />
          </div>
          <div className="text-[undefined] text-[undefined] h-[0] w-[428px] rounded-full leading-[undefined] outline outline-[3px] outline-[rgba(242,242,242,1)]" />
          <div className="flex w-[428px] items-start gap-1 self-stretch text-base leading-6 text-black">
            <p>&#123;description&#125;</p>
          </div>
          <div className="flex w-[428px] flex-col items-start gap-1 self-stretch text-base leading-6">
            <div className="flex w-[268px] items-start gap-1">
              <p className="text-[rgba(130,130,130,1)]">&#123;key_text&#125;</p>
              <p className="text-black">&#123;value&#125;</p>
            </div>
            <div className="flex w-[268px] items-start gap-1">
              <p className="text-[rgba(130,130,130,1)]">&#123;key_text&#125;</p>
              <p className="text-black">&#123;value&#125;</p>
            </div>
          </div>
          <div className="flex w-[428px] items-center gap-1 self-stretch text-base leading-6 text-[rgba(130,130,130,1)]">
            <p className="uppercase">Addresses</p>
          </div>
          <div className="flex w-[428px] flex-col items-start gap-1 self-stretch text-base leading-6">
            <div className="flex w-[268px] flex-col items-start gap-1">
              <p className="text-[rgba(130,130,130,1)]">&#123;key_addr&#125;</p>
              <p className="text-black">&#123;value&#125;</p>
              <div className="flex items-start gap-2">
                <p className="text-[rgba(82,0,255,1)]">QR code</p>
                <p className="text-black">
                  <br />
                </p>
                <p className="text-[rgba(82,0,255,1)]">Copy address</p>
              </div>
            </div>
          </div>
          <div className="flex w-[428px] flex-col items-start gap-1 self-stretch text-base leading-6">
            <div className="flex w-[268px] flex-col items-start gap-1">
              <p className="text-[rgba(130,130,130,1)]">&#123;key_addr&#125;</p>
              <p className="text-black">&#123;value&#125;</p>
              <div className="flex items-start gap-2">
                <p className="text-[rgba(82,0,255,1)]">QR code</p>
                <p className="text-black">
                  <br />
                </p>
                <p className="text-[rgba(82,0,255,1)]">Copy address</p>
              </div>
            </div>
          </div>
          <div className="flex w-[428px] items-center gap-1 self-stretch text-base leading-6 text-[rgba(130,130,130,1)]">
            <p className="uppercase">Socials</p>
          </div>
          <div className="text-[undefined] text-[undefined] flex items-start gap-4 leading-[undefined]">
            <IcoSocialWebsite />
            <IcoSocialTelegram />
            <IcoSocialGithub />
            <IcoSocialReddit type="TYPE0" />
          </div>
          <div className="flex w-[428px] items-center gap-1 self-stretch text-base leading-6 text-[rgba(255,0,0,1)]">
            <p>Delete contact</p>
          </div>
        </div>
      )}
    </>
  )
}

EnsComponentExpanded.defaultProps = {
  type: 'TYPE0',
}

interface EnsComponentExpandedInterface {
  type: 'TYPE0';
}
