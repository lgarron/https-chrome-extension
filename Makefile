
ZIP = https-chrome-extension.zip
SOURCE_FILES = manifest.json eventPage.js options $(wildcard images/*.png)

# Target name is expand to assist zsh autocomplete.
$(ZIP): $(SOURCE_FILES)
	echo $(SOURCE_FILES)
	rm -rf $(ZIP)
	zip $(ZIP) $(SOURCE_FILES)

.PHONY: clean
clean:
	rm $(ZIP)