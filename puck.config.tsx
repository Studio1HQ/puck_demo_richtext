import type { Config } from "@puckeditor/core";
import { RichTextMenu } from "@puckeditor/core";
import Superscript from "@tiptap/extension-superscript";
import { Superscript as SuperscriptIcon } from "lucide-react";

type Props = {
  HeadingBlock: { title: string };
  RichTextBlock: { content: any };
};

export const config: Config<Props> = {
  components: {
    // Simple text block (baseline comparison)
    HeadingBlock: {
      fields: {
        title: { type: "text" },
      },
      defaultProps: {
        title: "Heading",
      },
      render: ({ title }) => (
        <div style={{ padding: 64 }}>
          <h1>{title}</h1>
        </div>
      ),
    },

    // Rich text block demonstrating structure, control, extensibility
    RichTextBlock: {
      label: "Rich Text",
      fields: {
        content: {
          type: "richtext",

          // Add custom TipTap extension
          tiptap: {
            extensions: [Superscript],
            selector: ({ editor }) => ({
              isSuperscript: editor?.isActive("superscript"),
              canSuperscript: editor
                ?.can()
                .chain()
                .toggleSuperscript()
                .run(),
            }),
          },

          // Custom toolbar with a Superscript control
          renderMenu: ({ children, editor, editorState }) => (
            <RichTextMenu>
              {children}

              <RichTextMenu.Group>
                <RichTextMenu.Control
                  title="Superscript"
                  icon={<SuperscriptIcon size={16} />}
                  onClick={() =>
                    editor?.chain().focus().toggleSuperscript().run()
                  }
                  active={editorState?.isSuperscript}
                  disabled={!editorState?.canSuperscript}
                />
              </RichTextMenu.Group>
            </RichTextMenu>
          ),
        },
      },
      render: ({ content }) => (
        <div style={{ padding: 64, maxWidth: 700, margin: "0 auto" }}>
          {content}
        </div>
      ),
    },
  },
};

export default config;
