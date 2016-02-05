
ZIP = https-chrome-extension.zip
SOURCE_FILES = manifest.json eventPage.js options/options.html options/options.js $(wildcard images/*.png)

# Target name is expand to assist zsh autocomplete.
https-chrome-extension.zip: $(SOURCE_FILES)
	echo $(SOURCE_FILES)
	rm -rf $(ZIP)
	zip $(ZIP) $(SOURCE_FILES)

.PHONY: clean
clean:
	rm $(ZIP)