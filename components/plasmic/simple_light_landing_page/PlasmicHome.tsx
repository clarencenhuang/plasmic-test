// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fqtEpZVaJ8Zu5P3rrBToQ1
// Component: CelIFzgEie7St
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header from "../../Header"; // plasmic-import: MD9xhCubmaAPV/component
import Section from "../../Section"; // plasmic-import: FyEiCMdgy6RUox/component
import Button from "../../Button"; // plasmic-import: Ne3ehynYnVhdV_/component
import FeatureCard from "../../FeatureCard"; // plasmic-import: p6gGydlM8A-n6/component
import Testimonial from "../../Testimonial"; // plasmic-import: q2dK0gYKTHMCa3/component
import HomeCta from "../../HomeCta"; // plasmic-import: sHkvXcJx8c8_-/component
import Footer from "../../Footer"; // plasmic-import: PVqdjJHBJhz2l/component

import { useScreenVariants as useScreenVariantsbmkiWuKMfM5Jzn } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: bmkiWuKMfM5jzn/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: fqtEpZVaJ8Zu5P3rrBToQ1/projectcss
import sty from "./PlasmicHome.module.css"; // plasmic-import: CelIFzgEie7St/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: 8EuZDn52axQC4s/icon
import RightArrowIcon from "./icons/PlasmicIcon__RightArrow"; // plasmic-import: uD545O-GBLVTOg/icon
import LightningIcon from "./icons/PlasmicIcon__Lightning"; // plasmic-import: yK926WjWZy0uKN/icon
import HammerIcon from "./icons/PlasmicIcon__Hammer"; // plasmic-import: QJdiBQ0dNpvjHZ/icon
import PencilIcon from "./icons/PlasmicIcon__Pencil"; // plasmic-import: VQwioedJD-Lu8L/icon
import SwapIcon from "./icons/PlasmicIcon__Swap"; // plasmic-import: ezF9WvG8cygu-Q/icon
import SlotIcon from "./icons/PlasmicIcon__Slot"; // plasmic-import: UeTyeARbmvnf2v/icon
import CycleIcon from "./icons/PlasmicIcon__Cycle"; // plasmic-import: _SXD1lnW8vrpTp/icon
import FacebookLogoIcon from "./icons/PlasmicIcon__FacebookLogo"; // plasmic-import: lVzRGsdS1T6WEL/icon
import TinderLogoIcon from "./icons/PlasmicIcon__TinderLogo"; // plasmic-import: fK1XFy-pKp9G96/icon
import AirbnbLogoIcon from "./icons/PlasmicIcon__AirbnbLogo"; // plasmic-import: WrsKWe4AOgbhIS/icon
import HubspotLogoIcon from "./icons/PlasmicIcon__HubspotLogo"; // plasmic-import: sW5t-PAxCHXV7V/icon
import AmazonLogoIcon from "./icons/PlasmicIcon__AmazonLogo"; // plasmic-import: 9rZf9lBFGnaVjd/icon

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {};
type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>();

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  topSection?: p.Flex<typeof Section>;
  solutions?: p.Flex<typeof Section>;
  columns?: p.Flex<"div">;
  howItWorks?: p.Flex<typeof Section>;
  validation?: p.Flex<typeof Section>;
  testimonial?: p.Flex<typeof Testimonial>;
  homeCta?: p.Flex<typeof HomeCta>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultHomeProps {}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {},

        props.args
      ),
    [props.args]
  );

  const $props = {
    ...args,
    ...variants
  };

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsbmkiWuKMfM5Jzn()
  });

  return (
    <React.Fragment>
      <Head></Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            plasmic_library_plasmic_color_type_css.plasmic_tokens,
            sty.root
          )}
        >
          {true ? (
            <Header
              data-plasmic-name={"header"}
              data-plasmic-override={overrides.header}
              className={classNames("__wab_instance", sty.header)}
            />
          ) : null}
          {true ? (
            <Section
              data-plasmic-name={"topSection"}
              data-plasmic-override={overrides.topSection}
              className={classNames("__wab_instance", sty.topSection)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__kyDqM)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__s9HJ9)}
                >
                  <div
                    className={classNames(projectcss.all, sty.freeBox__reWG)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__lAy7L
                      )}
                    >
                      {"Make your website"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xXgGk
                      )}
                    >
                      {"wonderful"}
                    </div>
                  </div>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__jmDzC
                    )}
                  >
                    {
                      "Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox__ky4V0)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__xxMSq)}
                    color={"blue" as const}
                    endIcon={
                      <RightArrowIcon
                        className={classNames(projectcss.all, sty.svg__mlTfE)}
                        role={"img"}
                      />
                    }
                    showEndIcon={true}
                  >
                    {"Start free trial"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__iUauq)}
                  >
                    {"Learn more"}
                  </Button>
                </p.Stack>

                <div className={classNames(projectcss.all, sty.freeBox__dizp)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__n0OIy)}
                    displayHeight={"100%" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/heroImage.png",
                      fullWidth: 1536,
                      fullHeight: 864,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </p.Stack>
            </Section>
          ) : null}
          {true ? (
            <Section
              data-plasmic-name={"solutions"}
              data-plasmic-override={overrides.solutions}
              className={classNames("__wab_instance", sty.solutions)}
              hasSubtitle={true}
              hasTitle={true}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"Explore the solutions"}
            >
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column___2Y2CE)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__dglFi)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__f4Oz5
                      )}
                    >
                      {"Powerful suite of tools"}
                    </div>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__reLfi
                      )}
                    >
                      {
                        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa."
                      }
                    </div>

                    <FeatureCard
                      className={classNames(
                        "__wab_instance",
                        sty.featureCard__v46Bv
                      )}
                      description={
                        "Taking collaboration to the next level with security and administrative features built for teams"
                      }
                      iconBack={
                        <LightningIcon
                          className={classNames(projectcss.all, sty.svg__fjhUg)}
                          role={"img"}
                        />
                      }
                      long={true}
                      title={"Building the Simple ecosystem"}
                    />

                    <FeatureCard
                      className={classNames(
                        "__wab_instance",
                        sty.featureCard___3VDaB
                      )}
                      description={
                        "Taking collaboration to the next level with security and administrative features built for teams"
                      }
                      iconBack={
                        <HammerIcon
                          className={classNames(projectcss.all, sty.svg__gj68Y)}
                          role={"img"}
                        />
                      }
                      long={true}
                      title={"Building the Simple Ecosystem"}
                    />

                    <FeatureCard
                      className={classNames(
                        "__wab_instance",
                        sty.featureCard__crTMm
                      )}
                      description={
                        "Taking collaboration to the next level with security and administrative features built for teams"
                      }
                      iconBack={
                        <PencilIcon
                          className={classNames(
                            projectcss.all,
                            sty.svg___3ZcCj
                          )}
                          role={"img"}
                        />
                      }
                      long={true}
                      title={"Building the Simple Ecosystem"}
                    />
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__qEsPy)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__m2ERd)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"none" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"100%" as const}
                    src={{
                      src: "/plasmic/simple_light_landing_page/images/simpleProject.png",
                      fullWidth: 1000,
                      fullHeight: 924,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </p.Stack>
            </Section>
          ) : null}
          {true ? (
            <Section
              data-plasmic-name={"howItWorks"}
              data-plasmic-override={overrides.howItWorks}
              className={classNames("__wab_instance", sty.howItWorks)}
              color={"halfDark" as const}
              hasSubtitle={true}
              hasTitle={true}
              subtitle={
                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat."
              }
              title={"How Simple works"}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__bcxAm)}
              >
                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__glpHh
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SwapIcon
                      className={classNames(projectcss.all, sty.svg__rlCcn)}
                      role={"img"}
                    />
                  }
                  title={"Initial Contact"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__p3Bbw
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <SlotIcon
                      className={classNames(projectcss.all, sty.svg__vvrgj)}
                      role={"img"}
                    />
                  }
                  title={"Discovery Session"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__iMkiY
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <CycleIcon
                      className={classNames(projectcss.all, sty.svg__yM3Wy)}
                      role={"img"}
                    />
                  }
                  title={"Contracting"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___6Kzmg
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <HammerIcon
                      className={classNames(projectcss.all, sty.svg__tTcbc)}
                      role={"img"}
                    />
                  }
                  title={"Fast Prototyping"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard___5Uy8C
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <PencilIcon
                      className={classNames(projectcss.all, sty.svg__oOgkG)}
                      role={"img"}
                    />
                  }
                  title={"Design Phase"}
                />

                <FeatureCard
                  className={classNames(
                    "__wab_instance",
                    sty.featureCard__kksFf
                  )}
                  description={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                  iconFront={
                    <LightningIcon
                      className={classNames(projectcss.all, sty.svg__ckhZh)}
                      role={"img"}
                    />
                  }
                  title={"Develop & Launch"}
                />
              </p.Stack>

              {true ? (
                <div
                  className={classNames(projectcss.all, sty.freeBox__c3TgN)}
                />
              ) : null}
            </Section>
          ) : null}
          {true ? (
            <Section
              data-plasmic-name={"validation"}
              data-plasmic-override={overrides.validation}
              className={classNames("__wab_instance", sty.validation)}
              hasSubtitle={true}
              hasTitle={true}
              subtitle={
                "Arcu cursus vitae congue mauris rhoncus viverra nibh cras pulvinar mattis blandit libero cursus mattis."
              }
              title={"Trusted by over 20,000 companies all over the world"}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__be4G8)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___20DyY)}
                >
                  <FacebookLogoIcon
                    className={classNames(projectcss.all, sty.svg__vwad6)}
                    role={"img"}
                  />

                  <TinderLogoIcon
                    className={classNames(projectcss.all, sty.svg__mF4Qq)}
                    role={"img"}
                  />

                  <AirbnbLogoIcon
                    className={classNames(projectcss.all, sty.svg__j2Xfr)}
                    role={"img"}
                  />

                  <HubspotLogoIcon
                    className={classNames(projectcss.all, sty.svg__dY780)}
                    role={"img"}
                  />

                  <AmazonLogoIcon
                    className={classNames(projectcss.all, sty.svg__muufk)}
                    role={"img"}
                  />
                </p.Stack>

                <Testimonial
                  data-plasmic-name={"testimonial"}
                  data-plasmic-override={overrides.testimonial}
                  className={classNames("__wab_instance", sty.testimonial)}
                />
              </p.Stack>
            </Section>
          ) : null}

          <HomeCta
            data-plasmic-name={"homeCta"}
            data-plasmic-override={overrides.homeCta}
            className={classNames("__wab_instance", sty.homeCta)}
          />

          {true ? (
            <Footer
              data-plasmic-name={"footer"}
              data-plasmic-override={overrides.footer}
              className={classNames("__wab_instance", sty.footer)}
            />
          ) : null}
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header",
    "topSection",
    "solutions",
    "columns",
    "howItWorks",
    "validation",
    "testimonial",
    "homeCta",
    "footer"
  ],
  header: ["header"],
  topSection: ["topSection"],
  solutions: ["solutions", "columns"],
  columns: ["columns"],
  howItWorks: ["howItWorks"],
  validation: ["validation", "testimonial"],
  testimonial: ["testimonial"],
  homeCta: ["homeCta"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  topSection: typeof Section;
  solutions: typeof Section;
  columns: "div";
  howItWorks: typeof Section;
  validation: typeof Section;
  testimonial: typeof Testimonial;
  homeCta: typeof HomeCta;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHome__VariantsArgs;
    args?: PlasmicHome__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHome__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicHome__ArgProps,
          internalVariantPropNames: PlasmicHome__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    topSection: makeNodeComponent("topSection"),
    solutions: makeNodeComponent("solutions"),
    columns: makeNodeComponent("columns"),
    howItWorks: makeNodeComponent("howItWorks"),
    validation: makeNodeComponent("validation"),
    testimonial: makeNodeComponent("testimonial"),
    homeCta: makeNodeComponent("homeCta"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
