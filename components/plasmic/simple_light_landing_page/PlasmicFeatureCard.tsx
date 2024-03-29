// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: fqtEpZVaJ8Zu5P3rrBToQ1
// Component: p6gGydlM8A-n6
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

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: fqtEpZVaJ8Zu5P3rrBToQ1/projectcss
import sty from "./PlasmicFeatureCard.module.css"; // plasmic-import: p6gGydlM8A-n6/css

export type PlasmicFeatureCard__VariantMembers = {
  long: "long";
};

export type PlasmicFeatureCard__VariantsArgs = {
  long?: SingleBooleanChoiceArg<"long">;
};

type VariantPropType = keyof PlasmicFeatureCard__VariantsArgs;
export const PlasmicFeatureCard__VariantProps = new Array<VariantPropType>(
  "long"
);

export type PlasmicFeatureCard__ArgsType = {
  iconFront?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  iconBack?: React.ReactNode;
};

type ArgPropType = keyof PlasmicFeatureCard__ArgsType;
export const PlasmicFeatureCard__ArgProps = new Array<ArgPropType>(
  "iconFront",
  "title",
  "description",
  "iconBack"
);

export type PlasmicFeatureCard__OverridesType = {
  root?: p.Flex<"div">;
};

export interface DefaultFeatureCardProps {
  iconFront?: React.ReactNode;
  title?: React.ReactNode;
  description?: React.ReactNode;
  iconBack?: React.ReactNode;
  long?: SingleBooleanChoiceArg<"long">;
  className?: string;
}

function PlasmicFeatureCard__RenderFunc(props: {
  variants: PlasmicFeatureCard__VariantsArgs;
  args: PlasmicFeatureCard__ArgsType;
  overrides: PlasmicFeatureCard__OverridesType;

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

  return (
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
        sty.root,
        { [sty.rootlong]: hasVariant(variants, "long", "long") }
      )}
    >
      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__okVKb, {
            [sty.freeBoxlong__okVKbzqQBb]: hasVariant(variants, "long", "long")
          })}
        >
          <div
            className={classNames(projectcss.all, sty.freeBox__ywuT6, {
              [sty.freeBoxlong__ywuT6ZqQBb]: hasVariant(
                variants,
                "long",
                "long"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: (
                <svg
                  className={classNames(projectcss.all, sty.svg___4VPnd)}
                  role={"img"}
                />
              ),

              value: args.iconFront
            })}
          </div>
        </div>
      ) : null}

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__hsok2, {
          [sty.freeBoxlong__hsok2ZqQBb]: hasVariant(variants, "long", "long")
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: "Title",
          value: args.title,
          className: classNames(sty.slotTargetTitle, {
            [sty.slotTargetTitlelong]: hasVariant(variants, "long", "long")
          })
        })}

        {p.renderPlasmicSlot({
          defaultContents:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
          value: args.description,
          className: classNames(sty.slotTargetDescription, {
            [sty.slotTargetDescriptionlong]: hasVariant(
              variants,
              "long",
              "long"
            )
          })
        })}
      </p.Stack>

      {(hasVariant(variants, "long", "long") ? true : true) ? (
        <div
          className={classNames(projectcss.all, sty.freeBox__hhOna, {
            [sty.freeBoxlong__hhOnAzqQBb]: hasVariant(variants, "long", "long")
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <svg
                className={classNames(projectcss.all, sty.svg__g5TOw)}
                role={"img"}
              />
            ),

            value: args.iconBack
          })}
        </div>
      ) : null}
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFeatureCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFeatureCard__VariantsArgs;
    args?: PlasmicFeatureCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFeatureCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicFeatureCard__ArgsType, ReservedPropsType> &
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
          internalArgPropNames: PlasmicFeatureCard__ArgProps,
          internalVariantPropNames: PlasmicFeatureCard__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicFeatureCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFeatureCard";
  } else {
    func.displayName = `PlasmicFeatureCard.${nodeName}`;
  }
  return func;
}

export const PlasmicFeatureCard = Object.assign(
  // Top-level PlasmicFeatureCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFeatureCard
    internalVariantProps: PlasmicFeatureCard__VariantProps,
    internalArgProps: PlasmicFeatureCard__ArgProps
  }
);

export default PlasmicFeatureCard;
/* prettier-ignore-end */
