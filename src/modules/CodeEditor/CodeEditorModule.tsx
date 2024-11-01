"use client";

import { RootState } from "@/redux/store";
import { Extension } from "@codemirror/state";
import { useEffect, useMemo, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CodeMirror, { EditorView } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import createTheme from "@uiw/codemirror-themes";
import { customThemes } from "@/lib/themes";
import { color } from "@uiw/codemirror-extensions-color";
import { HeaderCodeEditor } from "./HeaderCodeEditor";
import { setWidth } from "@/redux/features/exportSlice";
import { motion } from "framer-motion";
import { codeCounter } from "./constants/contants";

const lineWrapping = false;
const readOnly = false;

export const CodeEditorModule = () => {
  const { language, theme, lineNumbers, lineStart } = useSelector(
    (state: RootState) => state.editor
  );
  const { radius, padding, opacity, background } = useSelector(
    (state: RootState) => state.framer
  );
  const { headerTerminal, watermark, border } = useSelector(
    (state: RootState) => state.window
  );
  const { fontSize, fontWeight } = useSelector(
    (state: RootState) => state.font
  );
  const { width } = useSelector((state: RootState) => state.export);
  const editorRef = useRef<HTMLDivElement>(null);
  const [extensions, setExtensions] = useState<Extension[]>([]);
  const dispatch = useDispatch();

  const basicSetup = useMemo(
    () => ({
      foldGutter: false,
      foldKeymap: false,
      searchKeymap: false,
      highlightActiveLine: false,
      highlightActiveLineGutter: false,
      drawSelection: false,
      rectangularSelection: false,
      highlightSelectionMatches: false,
      allowMultipleSelections: false,
      bracketMatching: false,
      highlightSpecialChars: false,
      syntaxHighlighting: true,
      autocompletion: true,
      lineNumbers: lineNumbers,
      firstLineNumber: lineStart,
    }),
    [lineNumbers, lineStart]
  );

  const editorTheme = useMemo(() => {
    const options = customThemes[theme]?.options;
    if (options) {
      const createdTheme = createTheme({
        ...options,
        settings: {
          ...options.settings,
          background: "transparent",
          gutterBackground: "transparent",
          gutterBorder: "transparent",
        },
      });

      return {
        extension: createdTheme,
        settings: options.settings,
      };
    }
    return undefined;
  }, [theme]);

  const baseExtensions: Extension[] = useMemo(
    () => [
      EditorView.lineWrapping,
      EditorView.theme({
        "&": {
          height: "100%",
          width: "100%",
        },
      }),
    ],
    []
  );

  useEffect(() => {
    setExtensions([
      ...baseExtensions,
      color,
      langs[language as keyof typeof langs](),
      ...(lineWrapping ? [EditorView.lineWrapping] : []),
      EditorView.editable.of(!readOnly),
    ]);
  }, [language, baseExtensions]);

  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const newWidth = entry.contentRect.width.toFixed(0);
        dispatch(setWidth(Number(newWidth)));
      }
    });

    if (editorRef.current) {
      observer.observe(editorRef.current);
    }

    /* return () => {
      if (editorRef.current) {
        observer.unobserve(editorRef.current);
      }
    }; */
  }, [dispatch]);

  return (
    <div className="w-full h-max flex flex-col items-center justify-center">
      <div
        ref={editorRef}
        id="code-editor"
        className="h-max flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(45deg, #252525 25%, transparent 0), linear-gradient(-45deg, #252525 25%, transparent 0), linear-gradient(45deg, transparent 75%, #252525 0), linear-gradient(-45deg, transparent 75%, #252525 0)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0,0 10px,10px -10px,-10px 0",
          borderRadius: `${radius}px`,
          width: "max-content",
        }}
      >
        <div
          className="min-w-full h-full p-8 relative"
          style={{
            // width: "500px",
            padding: `${padding}px`,
            borderRadius: `${radius}px`,
          }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full"
            style={{
              background: background,
              opacity: `${opacity}%`,
              borderRadius: radius + "px",
            }}
          />
          <div
            className="relative bg-[#1E1E1E] w-full h-full z-0"
            style={{
              borderRadius: radius + "px",
              boxShadow: `${
                border
                  ? "0 0 0 1px rgba(0, 0, 0, .1), 0 0 0 1px rgba(0,0,0,.9), inset 0 0 0 1.5px rgba(255, 255, 255, 0.653)"
                  : ""
              }`,
              padding: `${border ? "1px 2px" : "0px"}`,
            }}
          >
            {headerTerminal && <HeaderCodeEditor />}
            <div
              className="w-full h-full px-4 py-2"
              style={{
                background: editorTheme?.settings?.background || "transparent",
                borderTopLeftRadius: `${headerTerminal ? "" : radius + "px"}`,
                borderTopRightRadius: `${headerTerminal ? "" : radius + "px"}`,
                borderBottomLeftRadius: radius + "px",
                borderBottomRightRadius: radius + "px",
              }}
            >
              <CodeMirror
                value={codeCounter}
                extensions={extensions}
                theme={editorTheme}
                basicSetup={basicSetup}
                style={{
                  fontSize: fontSize,
                  fontWeight: fontWeight,
                  minWidth: "100%",
                  minHeight: "100%",
                  position: "relative",
                }}
              />
              {watermark && (
                <div
                  className="text-wrap font-medium z-10 text-muted select-none"
                  style={{
                    fontSize: "14px",
                    position: "absolute",
                    bottom: "0px",
                    right: "10px",
                    display: "flex",
                    alignItems: "center",
                    padding: "6px 4px",
                    color: "#6d6d6d",
                    opacity: 0.5,
                  }}
                >
                  CodeRender
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <motion.div
        className="mt-4 px-4 py-1 bg-[#cdcbcb] dark:bg-[#272727] text-black dark:text-white rounded-md shadow-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <p className="text-sm font-medium">{width}px</p>
      </motion.div>
    </div>
  );
};
